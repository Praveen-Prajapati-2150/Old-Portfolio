import '../styles/Contact.css';

export default function Contact() {
  return (
    <section id="Contact">
      <div id="contact">
        <div className="heading">Contact</div>

        <form
          className="contact-field"
          action="https://formsubmit.co/praveenranoliya5@gmail.com"
          target="_blank"
          method="POST"
          noValidate
          autoComplete="off"
        >
          <div className="cont-same" id="input-name">
            <label htmlFor="">Name</label>
            <input type="text" name="name" placeholder="enter your name" />
          </div>

          <div className="cont-same" id="input-msg">
            <label htmlFor="">Message</label>
            <input type="text" name="message" placeholder="text me anything" />
          </div>

          <button className="cont-same" type="submit" variant="extended">
            Send
          </button>
        </form>

        <div className="map-field">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d108070.18154420385!2d77.14511832254571!3d28.65136792608858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1626043477272!5m2!1sen!2sin"
            width="750"
            height="480"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
