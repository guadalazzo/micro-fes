import React , {useRef, useEffect}from "react";
import ReactDOM from "react-dom";
import counterWrapper from "remote/counterWrapper"
import "./index.css";

const App = () => {
  const divRef = useRef(null);
  useEffect(()=>{
    counterWrapper(divRef.current)
  },[])
  return (
  <div className="container">
 <div ref={divRef}></div>
  </div>
)};
ReactDOM.render(<App />, document.getElementById("app"));
