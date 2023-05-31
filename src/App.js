import "./App.css";
import "./components/account";
import Accounts from "./components/account";
import Bonus from "./components/bonus";

function App() {
  return (
    <div className="App">
      <h1>Account</h1>
      <h3>Total Amount</h3>
      <h3>Total Points</h3>
      <Accounts></Accounts>
      <Bonus></Bonus>
    </div>
  );
}

export default App;
