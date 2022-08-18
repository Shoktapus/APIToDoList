import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
//.map can only be used on an array[]
function ToDoList() {
  
  const [input, setInput] = useState("");
  const {store, actions} = useContext(Context)
  
  function remove(index) {
 const del = list.filter((element, i)=> index !== i)
 setList(del)
  }
  return (
    <>
      <form className="to-do form">
        <input
          type="text"
          placeholder="add a todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          name="text"
          className="todo-input"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            actions.addItem([...store.tasks, { label: input, done: false }]);
            setInput("");
          }}
          className="todo-button"
        >
          Add todo
        </button>
      </form>
      <div>
        {store.tasks.map((item, index) => {
          return (
            <>
              <div key={index}>{item}</div>
              <button onClick={()=> remove(index)}>Delete</button>
            </>
          );
        })}
      </div>
    </>
  );
}

export default ToDoList;
