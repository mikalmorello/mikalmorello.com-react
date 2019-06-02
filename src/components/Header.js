import React from 'react';
import SvgLogo from './SvgLogo';
import SvgMenu from './SvgMenu';

class Header extends React.Component {
  
  render(){
    return (
      <header id="header" className="header">
        <div className="header__container">
          <div className="header__brand">
            <a className="header__logo" href="/">
              <span className="svgstore svgstore--logo">
                <SvgLogo />
              </span>
            </a>
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