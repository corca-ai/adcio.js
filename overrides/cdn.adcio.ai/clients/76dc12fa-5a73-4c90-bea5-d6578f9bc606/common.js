const CATEGORY_IDS = {
  total: "2017",
  women: "2018",
  men: "2022",
  junior: "2578",
  acc: "2026",
};

// Andar test skin
const MO_GRID_PLACEMENT_ID = "f77b43c0-6062-4801-950d-104747aa349d";
const PC_GRID_PLACEMENT_ID = "5ae9907f-3cc2-4ed4-aaa4-4b20ac97f9f4";
const PC_BANNER_PLACEMENT_ID = "e945a115-c3c5-4575-8d01-b9d8565063fe";
const MO_BANNER_PLACEMENT_ID = "0f9485ac-d132-4d87-803b-e972a884c8b3";
const SWAPPED_KEY = "adcio-swapped";

const adcioInstance = new adcio.Adcio({
  clientId: "76dc12fa-5a73-4c90-bea5-d6578f9bc606",
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
  const stored = window.sessionStorage.getItem(SWAPPED_KEY);
  if (!stored) {
    return [];
  }
  const parsed = JSON.parse(stored);
  if (!Array.isArray(parsed)) {
    return [];
  }
  return parsed;
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
const injectGridSuggestions = (selector, suggestionResponse, categoryId) => {
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
    swapElement(originalElement, newElement, suggestion.logOptions);

    swapped.push({
      suggestion,
      original: elementToProduct(originalElement),
    });
  });

  setSwappedProduct(swapped);
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

const injectGrid = (wrapperSelector, gridSelector, placementId, customer) =>
  withHidden(gridSelector, async () => {
    const categoryId =
      getCategoryIdFromHTML(
        document.querySelector(wrapperSelector)?.innerHTML,
      ) || CATEGORY_IDS.total;
    const allIdOnStore = getAllProductIds(gridSelector);

    const suggested = await adcioInstance.createSuggestionProducts({
      ...customer,
      categoryIdOnStore: categoryId,
      placementId,
      excludingProductIds: allIdOnStore,
    });
    injectGridSuggestions(gridSelector, suggested, categoryId);
    createOrFixRankBadge();
  });

const watchGrid = (selector, callback) => {
  const targetElement = document.querySelector(selector);
  const observeOptions = {
    childList: true,
  };

  const observer = new MutationObserver((mutationsList, observer) => {
    if (mutationsList.find((m) => m.type === "childList")) {
      callback();
    }
  });

  observer.observe(targetElement, observeOptions);
  window.addEventListener("beforeunload", () => observer.disconnect());
};

const handleMain = async (wrapperSelector, gridSelector, placementId) => {
  let customer;
  await adcio.waitForElement(wrapperSelector);
  await withHidden(wrapperSelector, async () => {
    customer = await getCustomer();
    await injectGrid(wrapperSelector, gridSelector, placementId, customer);
  });
  watchGrid(gridSelector, () =>
    injectGrid(wrapperSelector, gridSelector, placementId, customer),
  );
};

const handleCategory = async (wrapperSelector, idToSelector, categoryId) => {
  if (!Object.values(CATEGORY_IDS).includes(categoryId)) {
    return;
  }

  const swapped = getSwappedProduct();
  const wrapper = await adcio.waitForElement(wrapperSelector);
  swapped.forEach(({ suggestion, original }) => {
    adcio.waitForElement(idToSelector(original.idOnStore), wrapper).then(() => {
      const originalExisting = wrapper.querySelector(
        idToSelector(original.idOnStore),
      );
      swapElement(
        originalExisting,
        productToProductListElement(suggestion, categoryId),
        suggestion.logOptions,
      );
    });

    adcio
      .waitForElement(idToSelector(suggestion.product.idOnStore), wrapper)
      .then(() => {
        const suggestedExisting = wrapper.querySelector(
          idToSelector(suggestion.product.idOnStore),
        );
        suggestedExisting.replaceWith(
          productToProductListElement(
            { product: original, logOptions: {} },
            categoryId,
          ),
        );
      });
  });
};
