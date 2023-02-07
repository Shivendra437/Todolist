import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { useContext } from "react";
import {contextapi} from "./Component/Context";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
// const result=useContext('');
root.render(
  // <result.Consumer>
  <StrictMode>
    <App />
  </StrictMode>
  // </result.Consumer>
);
