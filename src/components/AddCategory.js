import React from "react";
import { Link } from "react-router-dom";
import {
  getCategoriesFromLocalStorage,
  setCategoriesToLocalStorage,
} from "./localStorage";
export default function AddCategory() {
  let categoryList = getCategoriesFromLocalStorage();
  function saveCategory(element) {
    categoryList.push(element.value);
    setCategoriesToLocalStorage(categoryList);
  }
  function createTodoDB(element) {
    if (localStorage.getItem(element.value) === null) {
      localStorage.setItem(element.value, "[]");
    }
  }
  return (
    <div>
      <section className="add_category bg-white">
        <h2>Write category name...</h2>
        <input type="text" />
        <Link
          onClick={(e) => {
            createTodoDB(e.target.previousElementSibling);
            saveCategory(e.target.previousElementSibling);
          }}
          to="/"
        >
          Save
        </Link>
      </section>
    </div>
  );
}
