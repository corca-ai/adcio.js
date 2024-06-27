export const createElementFromHTML = (html: string) => {
  const div = document.createElement("div");
  div.innerHTML = html.trim();
  return div as Element;
};
