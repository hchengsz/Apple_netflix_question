import "./styles.css";
import Component from "./Component";
import Store from "./Store";

export default function App() {
  return (
    <div className="App">
      <Store>
        <Component></Component>
      </Store>
    </div>
  );
}
