import { createSignal } from "solid-js";

export default () => {
  const [counter, setCounter] = createSignal(0);
  return (
    <div>
      <div>{counter()}</div>
      <button onClick={() => setCounter(counter() + 1)}>Add one</button>
    </div>
  );
};
