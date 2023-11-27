
import { createContext } from "react";
import { useReducer } from "react";
export const TodoContext = createContext({
    todo:[],
    addNewItem:()=>{},
    deleteItem:()=>{},
});

const todoReducer=(current,action)=>{
    let newTo=current;
    if(action.type=="NEW_ITEM"){
      newTo = [...current, { name: action.payload.itemName, date: action.payload.itemDate }];
    }
    else if(action.type==="DELETE_ITEM"){
      newTo = current.filter((item) => item.name !== action.payload.itemName);
    }
    return newTo;
  };
  

const TodoContextPro=({Children})=>{
    const[todo,dispatchTodo] =useReducer(todoReducer,[]);
  
    const addNewItem = (itemName, itemDate) => {
        const newItemAct={
        type :"NEW_ITEM",
        payload:{
            itemName,
            itemDate
        }
        };
        dispatchTodo(newItemAct); 
    };
    const deleteItem = (todoItemName) => {
        const deleteItemAct={
        type :"DELETE_ITEM",
        payload:{
            itemName:todoItemName,
        }
        };
        dispatchTodo(deleteItemAct);
        
    };
    return(
        <TodoContext.Provider value={{
            todo,
            addNewItem,
            deleteItem,
            }}>
            {Children}
        </TodoContext.Provider>
    );
}
export default TodoContextPro;
