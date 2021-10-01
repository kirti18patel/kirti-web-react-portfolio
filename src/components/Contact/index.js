import React, {useState} from 'react';
function Contact() {
  
  const [formState, setFormState] = useState({ Name: '', Email: '', Message: '' });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if(formState.Name !== "" || formState.Email !== "", formState.Message !== ""){
      fetch("https://formsubmit.co/ajax/7a0dd0a79d72b87ef85cd036f659ebd1", {
      method: "POST",
      headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
      body: JSON.stringify({
          Name: formState.Name,
          Email: formState.Email,
          Message: formState.Message
        })
      })
      .then(response => response.json())
      .catch(error => console.log(error));
    }
    setFormState({ Name: '', Email: '', Message: '' });
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

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
                    <div className="icon flex-around-center"><i className="fa fa-envelope"></i></div>
                    <div className="text">
                        <h3>Email</h3>
                        <a href="mailto:kirti18patel@yahoo.com" className="decoration-none-white">kirti18patel@yahoo.com</a>
                    </div>
                </div>
                <div className="box">
                    <div className="icon flex-around-center"><i className="fa fa-linkedin"></i></div>
                    <div className="text">
                        <h3>LinkedIn</h3>
                        <a href="https://www.linkedin.com/in/kirtipatel18/" target="_blank" rel="noreferrer" className="decoration-none-white">https://www.linkedin.com/in/kirtipatel18/</a>
                    </div>
                </div>
            </div>
          <div className="contact-form">
            <form action="https://formsubmit.co/7a0dd0a79d72b87ef85cd036f659ebd1" method="POST" onSubmit={handleFormSubmit}>
              <input type="text" name="_honey" style={{"display": "none"}}></input>              
              <input type="hidden" name="_captcha" value="false"></input>
              <input type="hidden" name="_subject" value="Submission from portfolio!"></input>
              <input type="hidden" name="_template" value="table"></input>

              <h2>Send Message</h2>
                <input placeholder="Name" 
                  name="Name" 
                  value={formState.Name}
                  required 
                  onChange={handleChange}></input>
                <input placeholder="Email" 
                  name="Email" 
                  value={formState.Email}
                  required 
                  onChange={handleChange}></input>
                <textarea placeholder="Type your message..." 
                  name="Message" 
                  value={formState.Message}
                  required
                  onChange={handleChange}></textarea>
                <input type="submit" value="Send Message" id="btn"></input>
            </form>
          </div>
      </div>
    </section>
  );
}

export default Contact;