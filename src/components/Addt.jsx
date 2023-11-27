import { useContext, useState } from "react";
import { TodoContext } from "../store/todo-items-store";

// eslint-disable-next-line react/prop-types
function Addt() {
  const {addNewItem} = useContext(TodoContext);
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");
  const handleName = (event) => {
    setTodoName(event.target.value);
  };
  const handleDate = (event) => {
    setTodoDate(event.target.value);
  };
  const handleAdd = () => {
    addNewItem(todoName, todoDate);
    setTodoName("");
    setTodoDate("");
  };

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={todoName}
            onChange={handleName}
          />
        </div>
        <div className="col-4">
          <input type="date" value={todoDate} onChange={handleDate} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Addt;
