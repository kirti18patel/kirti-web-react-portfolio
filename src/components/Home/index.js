import React from 'react';
import background from "../../assets/perce-rock.jpg";
function Home() {
  return (
    <section className="my-5 home" style={{ backgroundImage: `url(${background})` }}>
      <div className="content">
        <h1><span>H</span>i,</h1> 
        <h1>I am <span>K</span>irti,</h1> 
        <h1>Full Stack Web developer</h1> 
      </div>
      <div className="description-home">
        <p>I write code and improve my skills every day. I am honored to work with special people and looking forward to meet ambitious people ahead.</p>
      </div>
      <a href="mailto:kirti18patel@yahoo.com" className="contact-me decoration-none-white text-center"><span></span>Contact Me!</a>
      </section>
  );
}

export default Home;