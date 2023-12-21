import React from "react";
import Menu from "./components/Menu";
import Main from "./components/Main";
import './styles/app.scss';
import Skill from "./components/Skill";
import Project from "./components/Project";
import Contact from "./components/Contact";

export default function App(){
  return(
    <div>
      <Menu/>
      <Main/>
      <Skill/>
      <Project/>
      <Contact/>
    </div>
  )
}