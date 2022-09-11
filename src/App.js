import { useState } from "react";
import Home from "./components/Home";
import Todos from "./components/Todos";
import { Link, Routes, Route } from "react-router-dom";
import AddTodo from "./components/AddTodo";
import AddCategory from "./components/AddCategory";
function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  return (
    <div className="bg-[#E5E5E5] h-full flex justify-center items-center overflow-auto">
      <div className="main h-screen relative w-[449px] bg-[#fff] rounded-[54px]">
        <header>
          <h3>To Do List</h3>
          <Link to="">
            <div className="image">
              <img src="img/menu.png" alt="" />
            </div>
          </Link>
        </header>
        <Routes>
          <Route
            path="/"
            element={<Home setSelectedCategory={setSelectedCategory} />}
          />
          <Route
            path="/todos"
            element={<Todos selectedCategory={selectedCategory} />}
          />
          <Route
            path="/add-todo"
            element={<AddTodo selectedCategory={selectedCategory} />}
          />
          <Route
            path="/add-category"
            element={
              <AddCategory
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
