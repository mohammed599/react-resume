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
      <h4> Mohammed Kebbay</h4>
      <h5 className=" mb-3 mt-3 text-muted"> Fullstack developer</h5>
      <h6 className="mb-4">
        {" "}
        <span>
          {" "}
          <img src={mailIcon} className="info-mailImg" alt="mail" />{" "}
        </span>{" "}
        <a href="mailto:kebbaymke@gmail.com" className="mail-link">
          kebbaymke@gmail.com
        </a>
      </h6>
      <h6 className="mb-3">
        {" "}
        <span>
          {" "}
          <img src={locIcon} alt="locatiion" className="info-addressImg" />
        </span>
        Nairobi, Kenya
      </h6>
      <p>
        <span>
          <a
            href="https://github.com/mohammed599"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <img src={gitIcon} alt="github" />{" "}
          </a>
        </span>
        <span>
          <a
            href="https://www.linkedin.com/in/mohammed-kebbay-2b74a2213/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <img src={inIcon} alt="linkedin" />{" "}
          </a>
        </span>
      </p>
    </div>
  );
};

export default Info;
