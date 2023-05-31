import { useState } from "react";
import "./account.css";
function Accounts() {
  const [amount, setAmount] = useState(0);
  const [value, setValue] = useState(0);
  function increment() {
    setAmount(amount + 1);
  }
  function incrementByValue() {
    setAmount(amount + value);
  }
  function decrement() {
    if (amount > 0) {
      setAmount(amount - 1);
    }
  }
  return (
    <>
      <div className="container">
        <h2>Accounts Component</h2>
        <h3>Amount:{amount}</h3>
        <h3>Points:</h3>
        <button onClick={increment}>Increment +</button>
        <button onClick={decrement}>Decrement -</button>
        <input
          type="text"
          onChange={(e) => {
            setValue(+e.target.value);
          }}
        ></input>
        <button onClick={incrementByValue}>Increment By {value}+</button>
      </div>
    </>
  );
}

export default Accounts;
