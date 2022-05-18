import React, { useState } from "react";
import { workArray } from "../workcardClass";
import parse from "html-react-parser";
import $ from "jquery";
import "../styles/Portfolio.css";

function Portfolio() {
  let [startPoint, setStartPoint] = useState(0)
  const [initialWorks, setWorks] = useState(workArray.slice(startPoint, startPoint + 3));

  function nextWorks () {
      setStartPoint(startPoint += 3)
      setWorks(workArray.slice(startPoint, startPoint + 3))
  }

  function previousWorks () {
    setStartPoint(startPoint -= 3)
    setWorks(workArray.slice(startPoint, startPoint + 3))
  }

  return (
    <div id="myWorkContainer">
      <button className="workNav" id="workNavLeft" onClick={previousWorks} disabled={(startPoint === 0)}>
        left
      </button>

      <div id="myWork">
        {initialWorks.map((work) => parse(work.renderHtml()))}
      </div>

      <button className="workNav" id="workNavRight" onClick={nextWorks} disabled={(startPoint === workArray.length - 3)}>
        right
      </button>
    </div>
  );
}

const videos = $(".video");

for (let i = 0; i < videos.length; i++) {
  $(videos[i]).click(()=>console.log('clicked!'));
  $(videos[i]).mouseover(playVideo);
  $(videos[i]).mouseout(pauseVideo);
}

function playVideo(e) {
  e.target.loop = true;
  e.target.play();
}

function pauseVideo(e) {
  e.target.pause();
}

export default Portfolio;
