import React from 'react';
import SvgLogo from './SvgLogo';
import SvgMenu from './SvgMenu';
import { 
  Link
} from 'react-router-dom';

class Header extends React.Component {
  
  render(){
    return (
      <header id="header" className="header">
        <div className="header__container">
          <div className="header__brand">
            <Link to="/" className="header__logo">
              <span className="svgstore svgstore--logo">
                <SvgLogo />
              </span>
            </Link>
          </div>
          <div className="header__actions">
            <button id="headerMenuButton" className="header__menu-button">
              <SvgMenu />
            </button>
          </div>
        </div>
      </header>
    )
  }
} 

export default Header;