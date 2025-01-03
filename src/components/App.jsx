import ReactDropdown from "react-dropdown";
import styles from "./App.module.css";
import { HiSwitchHorizontal } from "react-icons/hi";
import { useEffect, useState } from "react";

function App() {
  const [input, setInput] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(0);

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value === "" || /^[0-9]+$/.test(value)) {
      setInput(value);
    }
  };

  useEffect(
    function () {
      async function getData() {
        try {
          setIsLoading(true);
          const res = await fetch(
            `https://api.exchangerate.host/convert?from=${from}&to=${to}&amount=${input}`
          );
          const data = await res.json();
          console.log(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }
      getData();
    },
    [from, to, input]
  );

  return (
    <div className={styles.App}>
      {/* heading  */}
      <div className={styles.heading}>
        <h1>Currency converter</h1>
      </div>

      <div className={styles.container}>
        <div className={styles.left}>
          <h3>Amount</h3>
          <input
            type="Enter the amount"
            value={input}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className={styles.middle}>
          <h3>From</h3>
          <ReactDropdown placeholder="form" />
        </div>

        <div className={styles.switchClass}>
          <HiSwitchHorizontal size="30px" />
        </div>

        <div className={styles.right}>
          <h3>TO</h3>
          <ReactDropdown placeholder="form" />
        </div>
      </div>

      <div className={styles.result}>
        <button>Convert</button>
        <h2>Converted Amount:</h2>
        <p>X</p>
      </div>
    </div>
  );
}

export default App;
