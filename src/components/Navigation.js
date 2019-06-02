import React from 'react';

class Navigation extends React.Component {
  
  render(){
    return (
      <nav id="mainMenu" className="main-menu"> 
        <ul className="main-menu__links">
          <li className="main-menu__link">
            <a href="/">Home</a> 
          </li>
          <li className="main-menu__link">
            <a href="/projects.html">Projects</a>
          </li>
          <li className="main-menu__link">
            <a href="/contact.html">Contact</a>
          </li>
        </ul>
      </nav>
    )
  }
  
}

export default Navigation;