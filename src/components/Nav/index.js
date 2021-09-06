import React from 'react';
import logo from '../../assets/logo.png';

function Nav(props) {
    const menu = ['About', 'Skills', 'Work', 'Contact']
  return (
      <nav className="flex-space-between">
          <div className="logo"> <img src={logo} alt="logo" onClick={() => (props.setCurrentCategory('home'))}></img> </div>
          <div className= "menu">
            <ul className="text-center">
                {
                    menu.map(item => (
                        <li key={item.toLocaleLowerCase()}>
                            <a href={"#" + item.toLocaleLowerCase()}
                            onClick={() => props.setCurrentCategory(item)}
                            key={item.toLocaleLowerCase()}
                            className="decoration-none-white">
                            {item}</a>
                            </li>
                    ))
                }
            </ul>
          </div>
          <div className="empty"></div>
          </nav>
  );
}

export default Nav;