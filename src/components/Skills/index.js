import React, { useState } from 'react';
function Skills() {
  const [icons] = useState(
    [{
      url: "html"
    },
    {
      url: "css"
    },
    {
      url: "js"
    },
    {
      url: "react"
    },
    {
      url: "nodejs"
    },
    {
      url: "api"
    },
    {
      url: "mongodb"
    },
    {
      url: "mysql"
    },
    {
      url: "git"
    },
    {
      url: "agile"
    },
    {
      url: "creative"
    },
    {
      url: "smart"
    }
    ]
  );
  return (
    <section className="my-5 skills flex-space-between">
        <div className="skills-description">
          <h3>Skills <span>&</span> Experiences</h3>
          <p>I started my professional journey in web development with startups, and collaborated with talented people to create web products with creative and smart thinking. 
            <br></br><br></br>I can efficiently work on front-end using HTML, CSS, JS, React and other libraries. Along with this, I can also work on back-end using Nodejs, MySQL and NoSQL ( MongoDB ). In the rear, I possess Full-stack development skills and experiences.
            <br></br><br></br>I have experience of working in agile development and value customer needs. Visit my <a href="https://www.linkedin.com/in/kirtipatel18/">LinkedIn</a> profile for more details or just <a href="mailto:kirti18patel@yahoo.com">contact</a> me.</p>
        </div>
        <div className="skill-icon">
          {
            icons.map((icon) => 
            <img
            src={require(`../../assets/icon/${icon.url}.png`).default}
            alt={icon.url}
            key={icon.url}
          />
          )}
        </div>
    </section>
  );
}

export default Skills;