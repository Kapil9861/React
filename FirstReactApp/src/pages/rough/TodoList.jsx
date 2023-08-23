// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./todo.css";

export default function TodoList() {
  let [todo, setTodo] = useState({
    //no matter how many you add in this case {A} it will get updated but not added
    title: "",
    content: "",
    status: "",
  });
  let [todoList, setTodolist] = useState([]);

  function addTodoHandler(event) {
    event.preventDefault();
    setTodolist([...todoList, todo]); // equal to newList=[...todolist] newList.push(todo) and setTodolist[newlist]
    setTodo({
      title: "",
      content: "",
      status: "",
    });
  }
  return (
    //functions and arguments must be passed inside arrow function like done in the onchage below
    <>
      <div className="todolist_container">
        <form className="form_container" onSubmit={addTodoHandler}>
          <div className="title_form_control">
            {/* Title Input Here we need to update value*/}

            <input
              type="text"
              value={todo.title}
              placeholder="Title"
              onChange={(event) => {
                setTodo({ ...todo, title: event.target.value });
              }}
            />
            {/* edi function cha ani tesko tala value change garnu parne chaine
            bhane simply onchange=
            {(event) => {
              setTodo();
            }} */}
            {/* Content Input */}
            <input
              type="text"
              value={todo.content}
              placeholder="Content"
              onChange={(event) => {
                setTodo({ ...todo, content: event.target.value });
              }}
            />
            {/* Status Input */}
            <input
              type="text"
              value={todo.status}
              placeholder="Status"
              onChange={(event) => {
                setTodo({ ...todo, status: event.target.value });
              }}
            />
            <button type="submit">Submit</button>
          </div>
        </form>
        <div className="todo_display--setion">
          <div>
            {todoList.map((value, index) => {
              return (
                
                  <div key={index} className="todo_container">
                    <p>{value.title}</p>
                    <p>{value.content}</p>
                    <p>{value.status}</p>
                  </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
