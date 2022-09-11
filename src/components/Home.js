import React from "react";
import { Link } from "react-router-dom";
import {
  getCategoriesFromLocalStorage,
  setCategoriesToLocalStorage,
} from "./localStorage";

export default function Home({ setSelectedCategory }) {
  let categoryList = getCategoriesFromLocalStorage();
  function deleteCategory(e) {
    e.target.parentElement.remove();
    categoryList.filter((c) => c !== e.target.parentElement.textContent);
    
  }
  return (
    <>
      <div className="header">
        <h2>Categories</h2>
      </div>

      <section className="categories">
        <ul>
          {categoryList !== null
            ? categoryList.map((category, index) => (
                <li
                  key={index}
                  onClick={() => {
                    setSelectedCategory(category);
                  }}
                >
                  <Link to="/todos">
                    <i className="fa-solid fa-clipboard-list"></i>
                    {category}
                  </Link>
                  <i
                    className="fa-solid fa-xmark"
                    onClick={(e) => deleteCategory(e)}
                  />
                </li>
              ))
            : ""}
        </ul>
      </section>

      <section className="footer">
        <Link to="/add-category">
          <i className="fa-solid fa-plus"></i>
        </Link>
      </section>
    </>
  );
}
