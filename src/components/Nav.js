import React from "react";
import $ from "jquery";
import download from "../images/download.png";
import cv from "../images/CV2022.pdf";

const styles = {
  nameFont: {
      fontFamily: 'Pacifico'
  },  
  downloadIcon: {
    width: "24px",
    padding: "5px",
  },
  noMargin: {
    margin: "0px",
  },
  aboutMeStyle: {
    backgroundColor: "white",
    color: "black",
  },
  downloadLink: {
      color: 'white'
  }
};

function NavBar({ setPage }) {
  function navSelect(e) {
    $("li").css({ "background-color": "black", "color": "white", 'transform': 'none' });
    $(e.target).css({ "background-color": "white", color: "black", "transform": "rotate(360deg)" });
    setPage(e.target.dataset.page);
  }

  return (
    <div>
      <ul style={styles.noMargin}>
        <li id="name" style={styles.nameFont}>Ben Growcott</li>
        <li data-page="about" style={styles.aboutMeStyle} onClick={navSelect}>
          About Me
        </li>
        <li data-page="portfolio" onClick={navSelect}>
          Portfolio
        </li>
        <li data-page="contact" onClick={navSelect}>
          Contact
        </li>
        <li>
          <a style={styles.downloadLink} href={cv} download>
            CV
            <img style={styles.downloadIcon} src={download} />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
