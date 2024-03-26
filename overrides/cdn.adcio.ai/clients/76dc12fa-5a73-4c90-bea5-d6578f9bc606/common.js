const CATEGORY_IDS = {
    �꾩껜: "2017",
    �곕㉫利�: "2018",
    留⑥쫰: "2022",
    二쇰땲��: "2578",
    �덊듃�⑺뭹: "2026",
  };
  
  // Andar test skin
  const MO_GRID_PLACEMENT_ID = "f77b43c0-6062-4801-950d-104747aa349d";
  const PC_GRID_PLACEMENT_ID = "5ae9907f-3cc2-4ed4-aaa4-4b20ac97f9f4";
  const PC_BANNER_PLACEMENT_ID = "e945a115-c3c5-4575-8d01-b9d8565063fe";
  const MO_BANNER_PLACEMENT_ID = "0f9485ac-d132-4d87-803b-e972a884c8b3";
  const SWAPPED_KEY = "adcio-swapped";
  const CATEGORY_CHANGE_EVENT = "adcio-category-change";
  let currentCategoryId = CATEGORY_IDS["�꾩껜"];
  const suggestions = {
    2017: null,
    2018: null,
    2022: null,
    2578: null,
    2026: null,
  };
  
  const adcioInstance = new adcio.Adcio({
    clientId: "76dc12fa-5a73-4c90-bea5-d6578f9bc606",
  });
  
  adcio.waitForDOM().then(() => {
    adcioInstance.collectLogs(adcio.clientApi.cafe24);
  });
  
  const getCustomer = async () => {
    let customer = {};
    try {
      const { id, ...rest } = await adcio.clientApi.cafe24.getCustomer();
      customer = { ...rest, customerId: id };
    } catch (e) {
      customer = {};
    }
    return customer;
  };
  
  /**
   * @param {Array<{ suggestion: SuggestionResponseDto; original: Product }>} replacements
   */
  const setSwappedProduct = (replacements) => {
    window.sessionStorage.setItem(SWAPPED_KEY, JSON.stringify(replacements));
  };
  
  /**
   * @return {Array<{ suggestion: SuggestionResponseDto; originalId: string }>}
   */
  const getSwappedProduct = () => {
    try {
      const stored = window.sessionStorage.getItem(SWAPPED_KEY);
      if (!stored) {
        return { swapped: [], categoryId: null };
      }
      const parsed = JSON.parse(stored);
      if (
        parsed?.swapped &&
        Array.isArray(parsed.swapped) &&
        parsed?.categoryId
      ) {
        return parsed;
      }
    } catch (e) {
      return { swapped: [], categoryId: null };
    }
  };
  
  /**
   * @param {Element} originalElement
   * @param {Suggestion} suggestion
   * @param {string} categoryId
   */
  const swapElement = (originalElement, newElement, logOptions) => {
    newElement.addEventListener("click", () => adcioInstance.onClick(logOptions));
    newElement.addEventListener("impression", () =>
      adcioInstance.onImpression(logOptions),
    );
    adcioInstance.observeImpression({
      element: newElement,
    });
  
    originalElement.replaceWith(newElement);
  };
  
  /**
   * @param {string} selector
   * @param {SuggestionResponseDto} suggestionResponse
   * @param {string} categoryId
   */
  const injectGridSuggestions = (
    selector,
    suggestionResponse,
    categoryId,
    logImpression,
  ) => {
    const { placement, suggestions } = suggestionResponse;
  
    const wrapper = document.querySelector(selector);
    const originalElements = wrapper.querySelectorAll(".common_prd_list");
  
    const swapped = [];
    suggestions.forEach((suggestion, index) => {
      const displayPosition = placement.displayPositions[index];
      if (!displayPosition) {
        return;
      }
  
      const originalElement = originalElements[displayPosition - 1];
      const newElement = productToElement(suggestion, categoryId);
  
      newElement.addEventListener("click", () =>
        adcioInstance.onClick(suggestion.logOptions),
      );
  
      if (logImpression) {
        newElement.addEventListener("impression", () =>
          adcioInstance.onImpression(suggestion.logOptions),
        );
        adcioInstance.observeImpression({
          element: newElement,
        });
      }
  
      originalElement.replaceWith(newElement);
  
      swapped.push({
        suggestion,
        original: elementToProduct(originalElement),
      });
    });
  
    setSwappedProduct({ swapped, categoryId });
    createOrFixRankBadge();
  };
  
  /**
   * @param {string} html
   * @returns {string | null}
   */
  const getCategoryIdFromHTML = (html) => {
    if (!html) {
      return null;
    }
    const regex = /\$cate_no\s*=\s*(\d+)/;
    const match = html.match(regex);
    return match.length >= 2 ? match[1] : null;
  };
  
  /**
   * @param {Element} element
   * @returns {string | null}
   */
  const getProductIdFromElement = (element) => {
    if (!element.id) {
      return null;
    }
    const regex = /anchorBoxId_(\d+)/;
    const match = element.id.match(regex);
    return match.length >= 2 ? match[1] : null;
  };
  
  /**
   * @param {string} selector
   * @returns {Array<string>}
   */
  const getAllProductIds = (selector) => {
    const ids = [];
    document.querySelector(selector).childNodes?.forEach((element) => {
      const productId = getProductIdFromElement(element);
      if (productId) {
        ids.push(productId);
      }
    });
    return ids;
  };
  
  const createOrFixRankBadge = (selector = "#monthly-best") => {
    const wrapper = document.querySelector(selector);
    const elements = wrapper.querySelectorAll(".img");
    elements.forEach((element, index) => {
      if (element.querySelector(".rankBadge") == null) {
        const rankBadge = document.createElement("span");
        rankBadge.classList.add("rankBadge");
        element.appendChild(rankBadge);
      }
      element.querySelector(".rankBadge").textContent = index + 1;
    });
  };
  
  const hide = (selector) => {
    document.querySelector(selector).style.visibility = "hidden";
  };
  
  const show = (selector) => {
    document.querySelector(selector).style.visibility = "visible";
  };
  
  const withHidden = async (selector, fn) => {
    hide(selector);
    try {
      await fn();
    } catch (e) {
      console.error(e);
    } finally {
      show(selector);
    }
  };
  
  const injectGrid = (gridSelector, placementId, customer, categoryId) =>
    withHidden(gridSelector, async () => {
      const allIdOnStore = getAllProductIds(gridSelector);
      let logImpression = false;
      if (!suggestions[categoryId]) {
        suggestions[categoryId] = await adcioInstance.createSuggestionProducts({
          ...customer,
          categoryId,
          placementId,
          excludingProductIds: allIdOnStore,
        });
        logImpression = true;
      }
      injectGridSuggestions(
        gridSelector,
        suggestions[categoryId],
        categoryId,
        logImpression,
      );
    });
  
  const observeCategoryChangeEvent = (wrapper) => {
    const observer = new MutationObserver(() => {
      const categoryId = getCategoryIdFromHTML(wrapper.innerHTML);
      if (categoryId && categoryId !== currentCategoryId) {
        currentCategoryId = categoryId;
        wrapper.dispatchEvent(
          new CustomEvent(CATEGORY_CHANGE_EVENT, { detail: { categoryId } }),
        );
      }
    });
  
    observer.observe(wrapper, { childList: true });
    window.addEventListener("beforeunload", () => observer.disconnect());
  };
  
  const handleMain = async (wrapperSelector, gridSelector, placementId) => {
    let customer;
    const wrapper = await adcio.waitForElement(wrapperSelector);
  
    await withHidden(wrapperSelector, async () => {
      customer = await getCustomer();
      await injectGrid(gridSelector, placementId, customer, CATEGORY_IDS["�꾩껜"]);
    });
  
    observeCategoryChangeEvent(wrapper);
    wrapper.addEventListener(CATEGORY_CHANGE_EVENT, async (e) => {
      await injectGrid(gridSelector, placementId, customer, e.detail.categoryId);
    });
  };
  
  const handleCategory = async (wrapperSelector, idToSelector) => {
    const url = new URL(window.location.href);
    const categoryId = url.searchParams.get("cate_no");
    const sortMethod = url.searchParams.get("sort_method");
  
    // �뺣젹�� �뷀뤃�멸� �꾨땶 寃쎌슦 臾댁떆
    if (sortMethod) {
      return;
    }
  
    if (!Object.values(CATEGORY_IDS).includes(categoryId)) {
      return;
    }
  
    const { categoryId: swappedCategoryId, swapped } = getSwappedProduct();
    if (swappedCategoryId !== categoryId) {
      return;
    }
  
    const wrapper = await adcio.waitForElement(wrapperSelector);
    swapped.forEach(({ suggestion, original }) => {
      adcio.waitForElement(idToSelector(original.idOnStore), wrapper).then(() => {
        const originalExisting = wrapper.querySelector(
          idToSelector(original.idOnStore),
        );
        const newElement = productToProductListElement(suggestion, categoryId);
        newElement.addEventListener("click", () =>
          adcioInstance.onClick(suggestion.logOptions),
        );
        newElement.addEventListener("impression", () =>
          adcioInstance.onImpression(suggestion.logOptions),
        );
        adcioInstance.observeImpression({
          element: newElement,
        });
  
        originalExisting.replaceWith(newElement);
      });
  
      adcio
        .waitForElement(idToSelector(suggestion.product.idOnStore), wrapper)
        .then(() => {
          const suggestedExisting = wrapper.querySelector(
            idToSelector(suggestion.product.idOnStore),
          );
          const newElement = productToProductListElement(
            { product: original, logOptions: {} },
            categoryId,
          );
          suggestedExisting.replaceWith(newElement);
        });
    });
  };