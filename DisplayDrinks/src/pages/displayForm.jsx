import React from "react";

function DisplayForm({ value, index, removeData }) {
  function dataHandler() {
    removeData(index);
  }
  return (
    <div className="inner_div">
      <p>{value.name}</p>
      <p>{value.email}</p>
      <p>{value.age}</p>
      <p>{value.address}</p>
      <button onClick={() => dataHandler(index)}></button>
    </div>
  );
}

export default DisplayForm;
