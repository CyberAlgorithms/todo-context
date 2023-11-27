import { useContext } from "react";
import {TodoContext} from "../store/todo-items-store";
import styles from "./Welcome.module.css";

function Welcome(){
    const {todo} = useContext(TodoContext);
    return(
        todo.length===0 && <p className={styles.welcome}> Enjoy your day!</p>
        
    );
}
export default Welcome;