import React from 'react';
import SvgLogo from './SvgLogo';
import SvgMenu from './SvgMenu';
import { 
  Link
} from 'react-router-dom';

class Header extends React.Component {
  
  checkMenuState(menuState){
    if (menuState === true) {
      return 'header__menu-button--active';
    }
  }
  
  setHeaderColor(menuState){
    if (menuState === true) {
      return 'header--menu-light';
    } else {
      return '';
    }
  }

  render(){
    return (
      <header id="header" className={`header ${this.setHeaderColor(this.props.menuState)}`}>
        <div className="header__container">
          <div className="header__brand">
            <Link to="/" className="header__logo">
              <span className="svgstore svgstore--logo">
                <SvgLogo />
              </span>
            </Link>
          </div>
          <div className="header__actions">
            <button id="headerMenuButton" className="header__menu-button" className={`header__menu-button ${this.checkMenuState(this.props.menuState)}`} onClick={(e)=>this.props.setMenuState()}>
              <SvgMenu />
            </button>
          </div>
        </div>
      </header>
    )
  }
} 

export default Header;