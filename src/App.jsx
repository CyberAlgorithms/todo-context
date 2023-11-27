import "./App.css";
import AppName from "./components/AppName";
import Addt from "./components/Addt";
import Items from "./components/Items";
import TodoContextPro from "./store/todo-items-store";
import Welcome from "./components/Welcome";


function App() {
  
    return (
        <TodoContextPro.Provider>
        <AppName />
        <Addt></Addt>
        <Welcome></Welcome>
        <Items></Items>
        </TodoContextPro.Provider>
    );
}

export default App;
