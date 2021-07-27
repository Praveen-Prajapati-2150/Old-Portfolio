import react from "react";
// import "../styles/Work.css";
// import "../styles/Work.css";
import "../styles/Work.css";
// import "bootstrap/dist/css/bootstrap.css";
import Button from "@material-ui/core/Button";

export default function Work() {
  return (
    <div className="Work" id="Work">
      <div className="project-div">
        <div className="big-box">
          <div className="project-box" id="projectBox1">
            <a href="https://github.com/Praveen-Prajapati-2150/Your-Keep" target="_blank">
              {" "}
              <button>Visit</button>
            </a>
          </div>
          <h1>THAT PROJECT</h1>
        </div>

        <div className="big-box">
          <div className="project-box" id="projectBox2">
            <a href="" target="_blank">
              {" "}
              <button>Visit</button>
            </a>
          </div>
          <h1>THAT PROJECT</h1>
        </div>

        <div className="big-box">
          <div className="project-box" id="projectBox3">
            <a href="https://praveen-prajapati-2150.github.io/White_Board/" target="_blank">
              {" "}
              <button>Visit</button>
            </a>
          </div>
          <h1>THAT PROJECT</h1>
        </div>

        <div className="big-box">
          <div className="project-box" id="projectBox4">
            <a href="https://Praveen-Prajapati-2150.github.io/Covid-Tracker" target="_blank">
              {" "}
              <button>Visit</button>
            </a>
          </div>
          <h1>THAT PROJECT</h1>
        </div>

        <div className="big-box">
          <div className="project-box" id="projectBox5">
            <a href="https://dom-brick-breaker-game.netlify.app/" target="_blank">
              {" "}
              <button>Visit</button>
            </a>
          </div>
          <h1>THAT PROJECT</h1>
        </div>

        <div className="big-box">
          <div className="project-box" id="projectBox6">
            <a href="www.google.com" target="_blank">
              {" "}
              <button>Visit</button>
            </a>
          </div>
          <h1>THAT PROJECT</h1>
        </div>
      </div>
    </div>
  );
}
