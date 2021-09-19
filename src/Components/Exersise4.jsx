import React, { Fragment } from "react";

function Exersise4() {
  const [Items, setItems] = React.useState([]);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmedPassword, setConfirmedPassword] = React.useState("");
  const [msg, setMessage] = React.useState("");
  const AddData = () => {
    const Item = {
      email: email,
      password: password,
      confirm: confirmedPassword,
      id: Items.length + 1,
    };
    setItems([...Items, Item]);
    setMessage('');
  };
  const validation=(e)=>{
      e.preventDefault();
    ((email===''||password==='' ) || confirmedPassword==='')?setMessage('Your should fill all inputs '):

    ( password === confirmedPassword)?AddData() : setMessage('Your Passwords should matches')
  }
 const deleteItem=(id)=>{
    const newItems = Items.filter((ele) => ele.id !== id);
    setItems([...newItems]);
  }
  return (
    <>
      <div className="conatiner formy">
        <h3>Sign up </h3>
        <form className="myForm" onSubmit={(e)=>validation(e)}>
          <input
            type="email"
            placeholder="Enter Your Email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Your Password"
            onChange={(event) => setConfirmedPassword(event.target.value)}
          />
          <button type='submit'>Submit</button>
          {msg ? <p className='error'>{msg}</p> : ""}
        </form>
      </div>
      <div>
        <table>
            <thead>
          <tr>
            <th>Email</th>
            <th>Password</th>
            <th>Confirm password</th>
            <th>Delete Row </th>
          </tr>
          </thead>
          <tbody>
          {Items
            ? Items.map((ele) => {
                return (
                  <tr key={ele.id}>
                    <td>{ele.email}</td>
                    <td>{ele.password}</td>
                    <td>{ele.confirm}</td>
                    <td onClick={()=>deleteItem(ele.id)}>X</td>
                  </tr>
                );
              })
            : ""}
            </tbody>
        </table>
      </div>
    </>
  );
}
export default Exersise4;
