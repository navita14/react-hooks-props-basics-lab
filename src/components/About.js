import React from "react";
import Links from "./links"

function About(props) {

  // let ptag = null    //if ptag exist or not
  // if (props.bio){
  //   ptag = <p>{props.bio}</p>
  // }
  let ptag = props.bio ? <p>{props.bio}</p> : null

  return (
    <div id="about">
      <h2>About Me</h2>
      {ptag}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links 
        github={props.links.github}
        linkedin= {props.links.linkedin}
      />
    </div>
  );
}

export default About;
