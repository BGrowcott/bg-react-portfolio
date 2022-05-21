import React from "react";
import gitHubLogo from "../images/GitHub-Mark-Light-64px.png";
import linkedInLogo from "../images/LI-In-Bug.png";
import stackLogo from "../images/768px-Stack_Overflow_icon.png";
import "../styles/Footer.css";
import HTMLReactParser from "html-react-parser";

const footerStyle = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  backgroundColor: "black",
  padding: "5px",
};

const patternContainer = {
  display: "flex",
};

const pattern = {
  background: "linear-gradient(45deg, black 50%, white 50%)",
  width: "5%",
  height: "30px",
};

const pattern2 = {
  background: "linear-gradient(-45deg, black 50%, white 50%)",
  width: "5%",
  height: "30px",
};

function Footer() {
  const patternArray = [];
  for (let i = 0; i < 20; i++) {
    patternArray.push(
      `<div style="width:2.5%; height:20px; background: linear-gradient(45deg, black 50%, white 50%)"></div> 
       <div style="width:2.5%; height:20px; background: linear-gradient(-45deg, black 50%, white 50%)"></div>`
    );
  }

  return (
    <div>
      <div style={patternContainer}>
        {patternArray.map((pattern) => HTMLReactParser(pattern))}
      </div>
      <footer style={footerStyle}>
        <a href="https://github.com/BGrowcott" target="_blank">
          <img className="logo" src={gitHubLogo} />
        </a>
        <a
          href="https://www.linkedin.com/in/ben-growcott-6a0232221/"
          target="_blank"
        >
          <img className="logo" src={linkedInLogo} />
        </a>
        <a
          href="https://stackoverflow.com/users/17089548/bgrowcott"
          target="_blank"
        >
          <img className="logo" src={stackLogo} />
        </a>
      </footer>
    </div>
  );
}

export default Footer;
