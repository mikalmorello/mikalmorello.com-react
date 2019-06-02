import React from 'react';
import SvgLogo from './SvgLogo';

class Footer extends React.Component {
  
  render(){
    return (
      <footer id="footer" className="footer fadein">
        <div className="footer__container">
          <div className="footer__brand">
            <a className="footer__logo" href="/">
              <span className="svgstore svgstore--logo">
                <SvgLogo />
              </span>
            </a>
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