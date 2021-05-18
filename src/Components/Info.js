import React from "react";
import img from "../test.jpg";
import "../App.css";
import mailIcon from "../assets/icons8-gmail-50-2.png";
import locIcon from "../assets/icons8-address-50.png";
import gitIcon from "../assets/icons8-github-50.png";
import inIcon from "../assets/icons8-linkedin-50.png";

const Info = () => {
  return (
    <div className="info-div">
      <img src={img} alt="img" className="img-info" />
      <h2> Mohammed Kebbay</h2>
      <h3> Fullstack developer</h3>
      <h4>
        {" "}
        <span>
          {" "}
          <img src={mailIcon} className="info-mailImg" alt="mail" />{" "}
        </span>{" "}
        mohammedkebbay5@gmail.com
      </h4>
      <h4>
        {" "}
        <span>
          {" "}
          <img src={locIcon} alt="locatiion" className="info-addressImg" />
        </span>
        Nairobi, Kenya
      </h4>
      <p>
        <span>
          <a href="https://github.com/mohammed599">
            {" "}
            <img src={gitIcon} alt="github" />{" "}
          </a>
        </span>
        <span>
          {" "}
          <img src={inIcon} alt="linkedin" />{" "}
        </span>
      </p>
    </div>
  );
};

export default Info;
