import React from "react";
import ReactDOM from "react-dom"
import Clock from "./frontend/clock";
import Tabs from "./frontend/tabs"

const Root = () => {
    let panes = [
    {title: "one", content: "I am the first"}, 
    {title: "two", content: "Second pane here"},
    {title: "three", content: "Third pane here"} 
    ]
    return(<div>
            <Clock />
            <Tabs panes = {panes} />
          </div>);
} 

document.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementById("main");
    ReactDOM.render( <Root/>, main );
});