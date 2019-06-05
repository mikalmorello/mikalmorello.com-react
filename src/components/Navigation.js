import React from 'react';
import { 
  Link
} from 'react-router-dom';

class Navigation extends React.Component {
  
  checkMenuState(menuState){
    if (menuState === 'default') {
      return '';
    } else if(menuState === 'true'){ 
      return 'main-menu--is-visible';
    } else if (menuState === 'false') {
      return 'main-menu--is-hidden';
    }
  }
  
  render(){
    return (
      <nav id="mainMenu" className={`main-menu ${this.checkMenuState(this.props.menuState)}`}> 
        <ul className="main-menu__links">
          <li className="main-menu__link">
            <Link to="/" onClick={(e)=>this.props.closeMenu()}>Home</Link> 
          </li>
          <li className="main-menu__link">
            <Link to="/projects" onClick={(e)=>this.props.closeMenu()}>Projects</Link>
          </li>
          <li className="main-menu__link">
            <Link to="/contact" onClick={(e)=>this.props.closeMenu()}>Contact</Link>
          </li>
        </ul>
      </nav>
    )
  }
  
}

export default Navigation;