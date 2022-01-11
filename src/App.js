import Button from "./Button";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((pre) => pre + 1);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>

      <h1 className={styles.title}>Welcome back!!</h1>
      <Button text={"Continue"} />
    </div>
  );
}

export default App;
