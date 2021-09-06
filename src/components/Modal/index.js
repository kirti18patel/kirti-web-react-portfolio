import React from 'react';

const Modal = ({ currentProject, onClose }) => {
    const {name, github, deployed, description, index} = currentProject;

    return (
      <div className="modalBackdrop" onClick={(e) =>{
          console.log(e.target.parentNode);
        if(e.target !== e.currentTarget)
          return onClose;
      }} >
        <div className="modalContainer">
            <div className="flex-space-between">
                <h3 className="modalTitle">{name}</h3>
                <button className="modal-close-btn" onClick={onClose} type="button">x</button>
            </div>
            <div className="project-info flex-center-column">
                <div className="project-img flex-center">
                    <a href={deployed} className="flex-center decoration-none-white">
                        <img src={require(`../../assets/${index+1}.png`).default} alt="current category" />
                    </a>
                </div>
                <div className="project-description text-center">
                    <p>{description}</p>
                    <br></br>
                    <a href={github} className="repo-link decoration-none-white text-center"><span></span><i className="fa fa-github"></i> Source Code</a>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default Modal;