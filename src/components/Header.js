import React from 'react';
import SvgLogo from './SvgLogo';
import SvgMenu from './SvgMenu';
import { 
  Link
} from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      y: 0
    };
  }
  
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, { passive: true })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll(event) {
    var header = document.getElementById('header'),
      headerHeight = header.clientHeight,
      scrollAmount = window.scrollY,
      windowHeight = window.innerHeight,
      headerOffset = windowHeight; 

    if (scrollAmount >= headerHeight) {
      header.classList.add('header--scroll');
    } else {
      header.classList.remove('header--scroll');
    }

    if (scrollAmount > headerOffset) {
      header.classList.add("header--sticky");
    } else {
      header.classList.remove("header--sticky");
    }
  }
  
  checkMenuState(menuState){
    if (menuState === 'true') {
      document.body.classList.add('body--menu-open');
      document.body.classList.add('body--overflow-hidden');
      return 'header__menu-button--active';
    } else {
      document.body.classList.remove('body--menu-open');
      document.body.classList.remove('body--overflow-hidden');
    }
  }
  
  setHeaderColor(menuState, headerStyle){
    if (menuState === 'true' || headerStyle === 'light') {
      return 'header--menu-light';
    } else {
      return '';
    }
  }

  render(){
    return (
      <header
        id="header" 
        className={`header ${this.setHeaderColor(this.props.menuState, this.props.headerStyle)}`}
      >
        <div className="header__container">
          <div className="header__brand">
            <Link to="/" className="header__logo">
              <span className="svgstore svgstore--logo">
                <SvgLogo />
              </span>
            </Link>
          </div>
          <div className="header__actions">
            <button id="headerMenuButton" className={`header__menu-button ${this.checkMenuState(this.props.menuState)}`} onClick={(e)=>this.props.setMenuState()}>
              <SvgMenu />
            </button>
          </div>
        </div>
      </header>
    )
  }
} 

export default Header;