import React from "react";
import { Link } from "react-router-dom";
export default function Todos({ selectedCategory, setSelectedCategory }) {
  function removeItem(e) {
    e.target.parentElement.remove();
    const todoList = JSON.parse(localStorage.getItem(selectedCategory)).filter(
      (c) => c !== e.target.parentElement.textContent
    );
    localStorage.setItem(selectedCategory, JSON.stringify(todoList));
  }
  return (
    <>
      <section className="todos uncompleted">
        <ul>
          {JSON.parse(localStorage.getItem(selectedCategory)).map(
            (el, index) => (
              <li key={index}>
                <input
                  type="checkbox"
                  name="todos"
                  onClick={(e) => removeItem(e)}
                />
                {el}
              </li>
            )
          )}
        </ul>
      </section>

      <section className="footer">
        <Link to="/add-todo">
          <i className="fa-solid fa-plus"></i>
        </Link>
      </section>
    </>
  );
}
