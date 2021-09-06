import React from 'react';
function Contact() {
  return (
    <section className="contact flex-center-column my-5">
      <div className="contactContent text-center">
        <h2>Contact Me</h2>
        <p>I am intrested in web development opportunities. If you have any question or want to discuss more about, don't hesitate to reach me.</p>
      </div>
      <div className="container flex-around-center">
      <div className="contact-info">
                <div className="box">
                    <div className="icon flex-around-center"><i className="fa fa-map-marker"></i></div>
                    <div className="text">
                        <h3>ADDRESS</h3>
                        <p>Montreal, QC, CA H3N 2V7</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon flex-around-center"><i className="fa fa-phone"></i></div>
                    <div className="text">
                        <h3>Phone</h3>
                        <p>+1 5145748186</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon flex-around-center"><i className="fa fa-envelope"></i></div>
                    <div className="text">
                        <h3>Email</h3>
                        <a href="mailto:kirti18patel@yahoo.com" className="decoration-none-white">kirti18patel@yahoo.com</a>
                    </div>
                </div>
            </div>
          <div className="contact-form">
            <form>
              <h2>Send Message</h2>
                <input placeholder="Name"></input>
                <input placeholder="Email"></input>
                <textarea placeholder="Type your message..."></textarea>
                <input type="submit" name="submit" value="Send Message" id="btn"></input>
            </form>
          </div>
      </div>
    </section>
  );
}

export default Contact;