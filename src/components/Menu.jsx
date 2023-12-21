import React from "react";
import '../styles/menu.scss';


export default function Menu(){
  return(
    <div id="menu">
      <nav>
        <ul>
          <li><a href='#'>Main</a></li>
          <li><a href='#skill'>Skill</a></li>
          <li><a href='#project'>Project</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}