import React from "react";
import "../App.css";
import htmIcon from "../assets/icons8-html-5-50-4.png";
import cssIcon from "../assets/icons8-css3-50.png";
import jsIcon from "../assets/icons8-javascript-50-4.png";
import reaIcon from "../assets/icons8-react-native-50-2.png";
import phpIcon from "../assets/icons8-php-logo-50.png";
import nodeIc from "../assets/icons8-nodejs-50.png";
import gitIc from "../assets/icons8-git-50.png";
import mongoIc from "../assets/icons8-mongodb-50.png";
import sqlIcon from "../assets/icons8-mysql-logo-50.png";
import pyIcon from "../assets/icons8-python-50-3.png";
import javaIc from "../assets/icons8-java-50-3.png";
import djangoIc from "../assets/icons8-django-50-2.png";
import dockIc from "../assets/icons8-docker-50-2.png";

const Skills = () => {
  return (
    <div>
      <h2> Skills</h2>
      <hr />
      <div className="skills-div">
        <img src={htmIcon} alt="" className="skills-logo" />
        <img src={cssIcon} alt="" className="skills-logo" />
        <img src={jsIcon} alt="" className="skills-logo" />
        <img src={reaIcon} alt="" className="skills-logo" />
        <img src={phpIcon} alt="" className="skills-logo" />
        <img src={nodeIc} alt="" className="skills-logo" />
        <img src={gitIc} alt="" className="skills-logo" />
        <img src={mongoIc} alt="" className="skills-logo" />
        <img src={sqlIcon} alt="" className="skills-logo" />
        <img src={pyIcon} alt="" className="skills-logo" />
        <img src={javaIc} alt="" className="skills-logo" />
        <img src={djangoIc} alt="" className="skills-logo" />
        <img src={dockIc} alt="" className="skills-logo" />
      </div>
    </div>
  );
};

export default Skills;
