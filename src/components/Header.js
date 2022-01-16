import '../styles/Header.css';
import Button from '@material-ui/core/Button';
import Typewriter from 'typewriter-effect';
import React, { useState } from 'react';
import bg1 from '../Assets/bg1.jpg';
import bg2 from '../Assets/bg2.jpg';

const imgs = [bg1, bg2];

export default function Header() {
  // const [bg, setBg] = useState(imgs[0]);
  // const initialBackgroundPosition = { x: -150, y: -80 };
  // const [position, setPosition] = useState(initialBackgroundPosition);
  function MoveBackground(e) {
    //   setPosition({
    //     x: position.x - e.movementX * 0.1,
    //     y: position.y - e.movementY * 0.1,
    //   });
    // console.log(position, e.offsetX);
    // console.log(e);
    e.target.style.backgroundPositionX = -e.clientX * 0.1 + 'px';
    e.target.style.backgroundPositionY = -e.clientY * 0.1 + 'px';
    // console.log(e.target.style.backgroundPosition);
  }

  // function ResetBackground(e) {
  //   setPosition(initialBackgroundPosition);
  // }

  // el.style.setProperty('--x', -e.offsetX + "px");

  return (
    <>
      <section
        id="Home"
        // onMouseEnter={() => setBg(imgs[0])}
        // onMouseLeave={() => setBg(imgs[1])}
        // style={{
        //   backgroundPositionX: `${position.x}px`,
        //   backgroundPositionY: `${position.y}px`,
        // }}
        onMouseMove={MoveBackground}
        // onMouseLeave={ResetBackground}
      >
        {/* <img src={bg}></img> */}
        <header>
          <h1 className="pointer-events">Praveen Prajapati</h1>
          <ul>
            <Button className="pointer-events" href="#Home" color="secondary">
              Home
            </Button>
            <Button className="pointer-events" href="#About" color="secondary">
              About
            </Button>
            <Button className="pointer-events" href="#Skills" color="secondary">
              Skills
            </Button>
            <Button className="pointer-events" href="#W {ork" color="secondary">
              Work
            </Button>
            <Button
              className="pointer-events"
              href="#Contact"
              color="secondary"
            >
              Contact
            </Button>
          </ul>
        </header>

        <div className="landing-page">
          <div className="heading">
            <h1>
              Praveen <br /> Prajapati
            </h1>
            <div className="oneline">
              <h2>I am a</h2>
              <Typewriter
                className="Typewriter__wrapper Typewriter__cursor"
                options={{
                  // strings: ['Hello', 'World'],
                  autoStart: true,
                  loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString('Frontend Developer')
                    .callFunction(() => {
                      console.log('String typed out!');
                    })
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString('UI & UX Designer')
                    .pauseFor(2500)
                    .deleteAll()
                    .callFunction(() => {
                      console.log('All strings were deleted');
                    })
                    .start();
                }}
              />
            </div>

            <h4>
              If you need something amazing, then
              <a
                className="pointer-events"
                href="mailto:<nowiki>praveenprajapati0810@gmail.com?subject=I want to hire you"
              >
                email
              </a>
              me
            </h4>
          </div>
        </div>
      </section>
    </>
  );
}
