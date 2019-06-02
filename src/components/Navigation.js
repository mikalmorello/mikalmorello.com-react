import React from 'react';
import { 
  Link
} from 'react-router-dom';

class Navigation extends React.Component {
  
  render(){
    return (
      <nav id="mainMenu" className="main-menu"> 
        <ul className="main-menu__links">
          <li className="main-menu__link">
            <Link to="/">Home</Link> 
          </li>
          <li className="main-menu__link">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="main-menu__link">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    )
  }
  
}

export default Navigation;