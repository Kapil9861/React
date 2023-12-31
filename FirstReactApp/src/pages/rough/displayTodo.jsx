/* eslint-disable react/prop-types */
import React from "react";

function DisplayTodo(props) {
  console.log(props);
  //or simply can be DisplayTodo({value})=>array destructuring or
  //props as it and let const {value}= props
  // eslint-disable-next-line react/prop-types
  const { value, index, removeHandler } = props;
  function TodoHandler() {
    console.log(index);
    removeHandler(index);
  }

  return (
    <div className="todo_container">
      <p>{value.title}</p>
      <p>{value.content}</p>
      <p>{value.status}</p>
      {console.log(index)}
      <button
        onClick={() => TodoHandler(index)}
        style={{
          backgroundColor: "red", // Example background color
          color: "white", // Example text color
          border: "none",
          padding: "8px 16px",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default DisplayTodo;
