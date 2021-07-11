import react from "react";
import "../styles/About.css";
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import WifiTetheringIcon from '@material-ui/icons/WifiTethering';

export default function About() {
  return (
    <>
      <section id="About">
      {/* <ImportantDevicesIcon/> */}
      <div className="heading">
            <h1>About Me</h1>
      </div>
        <div className="about-box">
            <div className="box"><ImportantDevicesIcon  id="color" ></ImportantDevicesIcon>
            Responsive</div>
            <div className="box"><DeveloperModeIcon  id="color" ></DeveloperModeIcon>Design</div>
            <div className="box"><WifiTetheringIcon  id="color" ></WifiTetheringIcon>Fast</div>
            <div className="box"><WifiTetheringIcon  id="color" ></WifiTetheringIcon>SEO</div>
        </div>
      </section>
    </>
  );
}
