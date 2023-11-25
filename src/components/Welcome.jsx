import { useContext } from "react";
import {TodoContext} from "../store/todo-items-store";
import styles from "./Welcome.module.css";

function Welcome(){
    const myItems = useContext(TodoContext);
    return(
        myItems.length===0 && <p className={styles.welcome}> Enjoy your day!</p>
        
    );
}
export default Welcome;