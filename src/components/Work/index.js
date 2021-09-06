import React, { useState } from 'react';
import Modal from '../Modal';

function Work() {
  const [projects] = useState([
    {
      name: 'Waste Management',
      github:"https://github.com/Group05-Project02/waste-management",
      deployed: "https://waste-management-project2.herokuapp.com/",
      description:
        'A product waste managing web application which allows business owners to manage their kitchen waste in order to lower their overhead costs and also decrease their carbon footprint.'
    },
    {
      name: 'Tech Blog',
      github:"https://github.com/kirti18patel/tech-blog",
      deployed: "https://salty-castle-76662.herokuapp.com/",
      description:
        'A tech blog web application which allows developers to publish their blog posts and comment on other developers’ posts as well.'
    },
    {
      name: 'COVIINFO',
      github:"https://github.com/Group6-UoT/uot-project1-group6",
      deployed: "https://group6-uot.github.io/uot-project1-group6/",
      description:
        'A coviinfo web app is a one stop solution to get information and news to Covid-19'
    },
    {
      name: 'Note Taker',
      github:"https://github.com/kirti18patel/note-taker",
      deployed: "https://dry-headland-69509.herokuapp.com/",
      description:
        'A note taker web application which allows the user to store, access, and remove notes for thier tasks.'
    },
    {
      name: 'Social Network API Back End',
      github:"https://github.com/kirti18patel/social-network-api",
      deployed: "https://github.com/kirti18patel/social-network-api",
      description:
        'A social network api backend application allows the user to store, access, update and remove their thoughts and reaction on the thoughts. They can also connect to their friends which already exist in NoSQL database.'
    },
    {
      name: 'Workday Scheduler',
      github:"https://github.com/kirti18patel/workday-scheduler",
      deployed: "https://kirti18patel.github.io/workday-scheduler/",
      description:
        'This web app provide a handy way to organise your day.'
    }
  ]);

  const [currentProject, setCurrentProject] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = (project, i) => {
    setCurrentProject({...project, index: i});
    setIsModalOpen(!isModalOpen);
  }

  const closeModal = (event) => {
    console.log(event.target)
    setIsModalOpen(!isModalOpen);
  }

  return (
    <section className="my-5 work">
      {isModalOpen && (
        <Modal currentProject={currentProject} onClose={closeModal} />
      )}
      <div className="project-card flex-around-center">
        {projects.map((project, i) => (
          <>
          <div className="project" key={i}>
          <img
            src={require(`../../assets/${i+1}.png`).default}
            alt={project.name}
            className="img-thumbnail mx-1"
            key={i}
          />
          <div className="overlay flex-center"onClick={() => toggleModal(project, i)}>View Project</div>
          </div>
          </>
        ))}
      </div>
    </section>
  );
}

export default Work;