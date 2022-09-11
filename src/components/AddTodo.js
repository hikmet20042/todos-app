import React from "react";
import { Link } from "react-router-dom";
export default function AddTodo({ selectedCategory }) {
  function saveTodo(element) {
    let todoList = JSON.parse(localStorage.getItem(selectedCategory));
    todoList.push(element.value);
    localStorage.setItem(selectedCategory, JSON.stringify(todoList));
  }
  return (
    <>
      <section className="add_todo bg-white">
        <h2>Add todo...</h2>
        <input type="text" />
        <Link
          to="/todos"
          onClick={(e) => {
            saveTodo(e.target.previousElementSibling);
          }}
        >
          Save
        </Link>
      </section>
    </>
  );
}
