import babVideo from "./images/babvideo.mp4";
import quizVideo from "./images/quizvideo.mp4";
import sunOrShowersVid from "./images/sunorshowersvideo.mp4";
import gmtbVideo from "./images/gmtbvideo.mp4";
import bootcampersVideo from "./images/bootcampersvideo.mp4"
import jateVideo from './images/jatevideo.mp4'

class WorkCard {
  constructor(title, description, videoFile, gitUrl, deployedUrl) {
    this.title = title;
    this.description = description;
    this.videoFile = videoFile;
    this.gitUrl = gitUrl;
    this.deployedUrl = deployedUrl;
  }
  renderHtml() {
    return `
        <div class="workCard">
          <header>
            <h3>${this.title}</h3>
          </header>
          <main>
            <video
              class="video"
              src=${this.videoFile}
              type="video/mp4"
              muted
            ></video>
          </main>
          <div>
            <p>${this.description}</p>
            <a href="${this.gitUrl}" target="_blank"><button class="btn btn-primary">Github</button></a>
            <a href="${this.deployedUrl}" target="_blank"><button class="btn btn-primary">Deployed App</button></a>
          </div>
          <footer></footer>
        </div>
        `;
  }
}

const workArray = [
  new WorkCard(
    "JavaScript Quiz",
    "Short, fun quiz on the fundamentals of JavaScript. Powered by JavaScript.",
    quizVideo,
    "https://github.com/BGrowcott/bg-magical-js-quiz",
    "https://bgrowcott.github.io/bg-magical-js-quiz/"
  ),
  new WorkCard(
    "Birmingham Association Banquets",
    "Restaurant finder application - search any city or postcode to find nearby restaurants.",
    babVideo,
    "https://github.com/oli-drew/bab-group-project-by-slackware",
    "https://oli-drew.github.io/bab-group-project-by-slackware/"
  ),
  new WorkCard(
    "Sun or Showers",
    "A Weather app - search any city worldwide for a 5 day forecast - uses OpenWeather API",
    sunOrShowersVid,
    "https://github.com/BGrowcott/bg-sun-or-showers",
    "https://bgrowcott.github.io/bg-sun-or-showers/"
  ),
  new WorkCard(
    "Gunz, Money & Tech Blogs",
    "Tech blog website where a user can create, view and update posts regarding tech. Users can comment on each other's posts.",
    gmtbVideo,
    "https://github.com/BGrowcott/gunz-money-and-tech-blogs",
    "https://gunz-money-and-tech-blogs.herokuapp.com/"
  ),
  new WorkCard(
    "Bootcampers Alumni",
    "This is a space for current and former coding Bootcampers to come together and share ideas, support, job opportunities and life. A user can log in, create a profile, browse and create forums and converse with other students and alumni.",
    bootcampersVideo,
    "https://github.com/BGrowcott/team-pascal-project",
    "https://pascal-project.herokuapp.com/"
  ),
  new WorkCard(
    "Just Another Text Editor",
    "This Progressive Web Application (PWA) is a text editor that runs in the browser.",
    jateVideo,
    "https://github.com/BGrowcott/text-editing-is-fun",
    "https://text-editing-is-fun.herokuapp.com/"
  ),
];

export { WorkCard, workArray };
