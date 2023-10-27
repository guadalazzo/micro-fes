import { render } from "solid-js/web";
import "./index.scss";
import Counter from "./Counter";

const App = () => (
  <div class="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: remote</div>
    <div>Framework: solid-js</div>
    <div>Language: TypeScript</div>
    <div>CSS: Tailwind</div>
    <Counter/>
  </div>
);
render(App, document.getElementById("app"));
