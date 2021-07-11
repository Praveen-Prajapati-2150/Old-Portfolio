import react from "react";
import "../styles/Header.css";
import Video from "../Assets/homebg.mp4";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

export default function Header() {
  return (
    <>
      <section id="Home">
        <header id="Home">
          <h1>Praveen Prajapati</h1>
          <ul>
            <Button href="#Home" color="secondary">
              Home
            </Button>
            <Button href="#About" color="secondary">
              About
            </Button>
            <Button href="#Skills" color="secondary">
              Skills
            </Button>
            <Button href="#Work" color="secondary">
              Work
            </Button>
            <Button href="#Contact" color="secondary">
              Contact
            </Button>

            {/* <a href="#About">
              <li>About</li>
            </a>
            <a href="#Skills">
              <li>Skills</li>
            </a>
            <a href="#Worl">
              <li>Work</li>
            </a>
            <a href="#Contact">
              <li>Contact</li>
            </a> */}
          </ul>
        </header>

        <div className="landing-page">
          <video autoPlay loop muted id="video">
            <source src={Video} type="video/mp4" />
          </video>

          <div className="heading">
            <h1>Praveen <br /> Prajapati</h1>
            <h2>I am a Frontend Developer</h2>
            <h4>
              If you need something amazing, then{" "}
              <a href="mailto:<nowiki>praveenprajapati0810@gmail.com?subject=I want to hire you">
                email
              </a>{" "}
              me
            </h4>
          </div>
        </div>
      </section>
    </>
  );
}
