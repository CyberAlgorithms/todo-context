import "./App.css";
import AppName from "./components/AppName";
import Addt from "./components/Addt";
import Items from "./components/Items";
import { useState } from "react";
import {TodoContext} from "./store/todo-items-store"
import Welcome from "./components/Welcome";

function App() {
  
  const [todo, setTodo] = useState([]);

  const handleClick = (itemName, itemDate) => {
    const newTodoItems = [...todo, { name: itemName, date: itemDate }];
    setTodo(newTodoItems);
  };
  const handleDelete = (todoItemName) => {
    const newTodoItem = todo.filter((item) => item.name !== todoItemName);
    setTodo(newTodoItem);
  };
  
  return (
    <>
      <TodoContext.Provider value={todo}>
      <AppName />
      <Addt onNewItem={handleClick}></Addt>
      <Welcome></Welcome>
      <Items myItems={todo} onDeleteClick={handleDelete}>
      </Items>
      </TodoContext.Provider>
    </>
  );
}

export default App;
