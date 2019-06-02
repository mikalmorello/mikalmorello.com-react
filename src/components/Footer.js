import React from 'react';
import SvgLogo from './SvgLogo';
import { 
  Link
} from 'react-router-dom';

class Footer extends React.Component {
  
  render(){
    return (
      <footer id="footer" className="footer fadein">
        <div className="footer__container">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <span className="svgstore svgstore--logo">
                <SvgLogo />
              </span>
            </Link>
          </div>
          <div className="footer__actions">
            <ul className="footer__links">
              <li className="footer__link">
                <a href="https://github.com/mikalmorello">Github</a>
              </li>
              <li className="footer__link">
                 <a href="https://codepen.io/mikalmorello/">Codepen</a>
              </li>
              <li className="footer__link">
                 <a href="https://www.linkedin.com/in/mikalmorello/">Linkedin</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    )
  }
  
}

export default Footer;