import TodoItem from "./TodoItem";
import styles from "./Items.module.css";
import {TodoContext} from "../store/todo-items-store";
import { useContext } from "react";

// eslint-disable-next-line react/prop-types
const Items = () => {
  const {todo} = useContext(TodoContext);
  
  return (
    <div className={styles.itemsContainer}>
      {todo.map((item) => (
        <TodoItem
          todoDate={item.date}
          todoName={item.name}
          key={Math.random()}
        >
        </TodoItem>
      ))}
    </div>
  );
};

export default Items;
