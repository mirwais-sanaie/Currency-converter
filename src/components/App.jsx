import ReactDropdown from "react-dropdown";
import styles from "./App.module.css";
import { HiSwitchHorizontal } from "react-icons/hi";

function App() {
  return (
    <div className={styles.App}>
      {/* heading  */}
      <div className={styles.heading}>
        <h1>Currency converter</h1>
      </div>

      <div className={styles.container}>
        <div className={styles.left}>
          <h3>Amount</h3>
          <input type="Enter the amount" />
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
