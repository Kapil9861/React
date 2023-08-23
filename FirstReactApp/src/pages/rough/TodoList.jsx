// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./todo.css";
import DisplayTodo from "./displayTodo";

export default function TodoList() {
  let [todo, setTodo] = useState({
    //no matter how many you add in this case {A} it will get updated but not added
    title: "",
    content: "",
    status: "",
  });
  let [todoList, setTodolist] = useState([]);

  function removeHandler(index) {
    let newTodoList = todoList.filter((item, i) => {
      return i != index;
    });
    setTodolist(newTodoList); //everytime you call the set function it re renders all the latest things
  }

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
                <DisplayTodo
                  key={index}       //Key must be the unique id like key={index.id}
                  value={value}
                  index={index}
                  removeHandler={removeHandler}
                />
                // for Doing this in the next page
                // <div key={value} className="todo_container">
                //   <p>{value.title}</p>
                //   <p>{value.content}</p>
                //   <p>{value.status}</p>
                // </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
