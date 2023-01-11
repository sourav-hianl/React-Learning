// import the react and react dom libraries
import React from "react";
import  ReactDOM  from "react-dom/client";
import App from "./App";

// get a reference to the div with id root
const el = document.getElementById('root');

// tell react to take control of that element
const root = ReactDOM.createRoot(el);


// show the component on the screen
root.render(<App/>);
