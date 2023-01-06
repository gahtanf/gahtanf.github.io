import React from "react";
import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import About from "./components/About/about";
import Project from "./components/project/Project";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <>
      <Nav />
      <Home />
      <About />
      <Project />
      <Contact />
    </>
  );
}

export default App;