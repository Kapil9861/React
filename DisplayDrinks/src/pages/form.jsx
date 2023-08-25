import React from "react";
import { useState } from "react";
import DisplayForm from "./displayForm";

export default function Form() {
  //This will only create a instance and it gets updated only not appended
  let [data, setData] = useState({
    name: "",
    address: "",
    email: "",
    age: "",
  });
  //For creating the list of data
  let [dataList, setDataList] = useState([]);

  //Data Handler
  function addDataHandler(onEvent) {
    onEvent.preventDefault();
    setDataList([...dataList, data]);
    setData({
      name: "",
      address: "",
      email: "",
      age: "",
    });
  }

  function removeData(index) {
    let newDataList = dataList.filter((value, ind) => {
      return ind != index;
    });
    setDataList(newDataList);
  }
  return (
    <>
      <div className="datalist_container">
        <form className="formcontainer" onSubmit={addDataHandler}>
          {/* adding the input fields */}
          <input
            type="text"
            value={data.name}
            placeholder="John Doe"
            onChange={(event) => {
              //Once the data is changed it gets changed and appended
              setData({ ...data, name: event.target.value });
            }}
          />
          <input
            type="text"
            value={data.address}
            placeholder="Kathmandu Nepal"
            onChange={(event) => {
              setData({ ...data, address: event.target.value });
            }}
          />
          <input
            type="text"
            value={data.email}
            placeholder="test@gmail.com"
            onChange={(event) => {
              setData({ ...data, email: event.target.value });
            }}
          />
          <input
            type="text"
            value={data.age}
            placeholder="18"
            onChange={(event) => {
              setData({ ...data, age: event.target.value });
            }}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="display">
        {dataList.map((value, index) => {
          return (
            <DisplayForm
              key={index}
              value={value}
              index={index}
              removeData={removeData}
            />
          );
        })}
      </div>
    </>
  );
}
