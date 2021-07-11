import react from "react";
import "../styles/Skills.css";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";

let myStyle={
  color:'pink',
	backgroundColor:'white',
	fontWeight:'bold'
}

export default function Skills() {
  return (
    <>
      <section id="Skills">
        <div className="heading">
          <h1>My Energy</h1>
        </div>

        <div className="skills-box">
          <div className="box left" id="box1"><span>HTML</span></div>
          <div className="box left" id="box2"><span>CSS</span> </div>
          <div className="box left" id="box3"><span>JavaScript </span></div>
          <div className="box left" id="box4"><span>ReactJS    </span></div>
          <div className="box left" id="box5"><span>BootStrap  </span></div>
          <div className="box right" id="box6"><span>Material UI</span></div>
          <div className="box right" id="box7"><span>NodeJS     </span></div>
          <div className="box right" id="box8"><span>Python     </span></div>
          <div className="box right" id="box9"><span>Figma      </span></div>
          <div className="box right" id="box10"><span>Selenium  </span></div>
          <div className="box left" id="box11"><span>Git </span></div>
          <div className="box left" id="box12"><span>GitHub </span></div>
          <div className="box left" id="box13"><span>Coming </span></div>
          <div className="box left" id="box14"><span>Coming </span></div>
          <div className="box left" id="box15"><span>Coming </span></div>
          {/* <div className="box" id="box11">hello</div>
          <div className="box" id="box12">hello</div> */}
        </div>
      </section>
    </>
  );
}
