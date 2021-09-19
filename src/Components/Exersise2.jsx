import React from "react";

function Exersise2() {

  const colors = ["red", "slateblue", "salmon", "seagreen", "violet", "brown"];
  const [color, setColor] = React.useState('#fff');
  const ChangeColor=({color})=>{
      setColor(color)
  }
  return (
    <div style={{ backgroundColor: color }} className='conatiner'>
      <h1> Change this div background color </h1>
      <div className="btns">
        {colors.map((color) => {
          return <button key={color}  onClick={()=>ChangeColor({color})}>{color}</button>;
        })}
      </div>
    </div>
  );
}
export default Exersise2;
