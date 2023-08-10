import React from "react";
import App from "./App";
import "./index.css";
import { createRoot } from "react-dom/client";

const domNode = document.getElementById("root");

if (domNode) {
    const root = createRoot(domNode);

    // Start rendering
    root.render(<App />);
} else {
    console.error("Unable to find root element with id 'root'");
}
