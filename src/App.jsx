import React from "react";
import "./App.css";
import Chatbot from "./components/Chatbot";
import Nav from "./components/NavBar";
import Hero from "./components/Hero";

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Hero />
      <Chatbot />
    </React.Fragment>
  );
}

export default App;
