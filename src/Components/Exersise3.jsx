import React from "react";

function Exersise3() {
  const [value, setValue] = React.useState("");
  const [Items, setItems] = React.useState([]);
  const addItem = () => {
    const item = {
      id: Items.length + 1,
      description: value,
    };
    setItems([...Items, item]);
  };
  const deleteItem = (item) => {
    const { id } = item.item;
    const newItems = Items.filter((ele) => ele.id !== id);
    setItems([...newItems]);
  };
  return (
    <div className="conatiner">
      <h3>To Do App </h3>
      <div className="simpleForm">
        <input type="text" onChange={(event) => setValue(event.target.value)} />
        <button onClick={addItem}> Add </button>
      </div>
      <div>
        <ul>
          {Items.map((item) => {
            return (
              <li key={item.id}>
                <div className="item">
                  <span> {item.description}</span>{" "}
                  <span className="close" onClick={() => deleteItem({ item })}>
                    x{" "}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default Exersise3;
