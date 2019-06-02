import React from 'react';

class HomeBanner extends React.Component {
  
  render(){
    return (
      <section id="banner" className="banner banner--split">
        <div className="banner__introduction">
          <div className="banner__content">
            <div className="banner__header">
              <h1 className="banner__title">
                <span className="banner__title-small">
                  Hi, my name is Mikal Morello,  I am a:
                </span>
                <span className="banner__title-large">
                  <button className="banner__button banner__button--designer">Designer</button>, <button className="banner__button banner__button--developer">developer</button>, and <button className="banner__button banner__button--strategist">digital strategist</button>.
                </span>
              </h1>
              <h2 id="subtitleDesigner" className="banner__subtitle banner__subtitle--designer">
                As a designer from the outset, I look to my arts background to ensure my work is unique and engaging and leaves its mark on the digital universe.
              </h2>
              <h2 id="subtitleDeveloper" className="banner__subtitle banner__subtitle--developer">
                As a developer, I thrive on getting lost in my editor, crafting clean, organized, and accessible code.
              </h2>
              <h2 id="subtitleStrategist" className="banner__subtitle banner__subtitle--strategist">
                A strategist at heart, with the constant need to innovate, I enjoy the challenges and opportunities every new project brings.
              </h2>
            </div>
            <div className="banner__link">
              <a href="#main" className="scroll">Learn More</a>
            </div>
          </div>
          <div className="banner__portrait">
            <button id="bannerPortrait" className="banner__portrait-button">
              <picture>
                <source srcSet="/assets/images/mikal-morello-portrait.png" media="(min-width: 960px)" />
                <img srcSet="/assets/images/mikal-morello-portrait--mobile.png" alt="Mikal Morello" />
              </picture>
            </button>
          </div>
        </div>
        <div className="banner__media">
        </div>
      </section>
    )
  }
  
}

export default HomeBanner;