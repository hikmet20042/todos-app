export function getCategoriesFromLocalStorage() {
  if (localStorage.getItem("categories") !== null) {
    return JSON.parse(localStorage.getItem("categories"));
  } else {
    localStorage.setItem("categories", "[]");
    return JSON.parse(localStorage.getItem("categories"));
  }
}
export function setCategoriesToLocalStorage(categoryList) {
  localStorage.setItem("categories", JSON.stringify(categoryList));
}
