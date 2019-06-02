import React from 'react';
import { 
  NavLink
} from 'react-router-dom';

class Navigation extends React.Component {
  
  render(){
    return (
      <nav>
        <NavLink exact activeClassName="active" to="/">Home</NavLink>
        <NavLink activeClassName="active" to='/projects'>Projects</NavLink>
        <NavLink activeClassName="active" to='/contact'>Contact</NavLink>
      </nav>
    )
  }
  
}

export default Navigation;