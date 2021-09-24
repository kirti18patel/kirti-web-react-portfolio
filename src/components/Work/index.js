import React, { useState } from 'react';
import Modal from '../Modal';

function Work() {
  const [projects] = useState([
    {
      name: 'Crazy Tetromino',
      github:"https://github.com/kirti18patel/crazy-tetris",
      deployed: "https://crazy-tetrominos.herokuapp.com/",
      description:
        'A crazy tetrominos is a very catchy and entertaining game where player can play game by logging in as well. Player gets awarded 40pts for destroying each line and its level will be up by 1 after reaching every 200pts.'
    },
    {
      name: 'Waste Management',
      github:"https://github.com/Group05-Project02/waste-management",
      deployed: "https://waste-management-project2.herokuapp.com/",
      description:
        'A product waste managing web application which allows business owners to manage their kitchen waste in order to lower their overhead costs and also decrease their carbon footprint.'
    },
    {
      name: 'Book Store',
      github:"https://github.com/kirti18patel/book-store",
      deployed: "https://kirti-book-search-engine.herokuapp.com/",
      description:
        'Book Search Engine web application allows avid readers to search books available in order to keep track of their favorite books and make a list of books that need to be purchased. The reader can also delete the book from the saved book once purchased or read.'
    },
    {
      name: 'Tech Blog',
      github:"https://github.com/kirti18patel/tech-blog",
      deployed: "https://salty-castle-76662.herokuapp.com/",
      description:
        'A tech blog web application which allows developers to publish their blog posts and comment on other developers’ posts as well.'
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
    }
  ]);

  const [currentProject, setCurrentProject] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = (project, i) => {
    setCurrentProject({...project, index: i});
    setIsModalOpen(!isModalOpen);
  }

  const closeModal = (event) => {
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
          <div className="overlay flex-center"onClick={() => toggleModal(project, i)}>{project.name}</div>
          </div>
          </>
        ))}
      </div>
    </section>
  );
}

export default Work;