import React from 'react';

class HomeBanner extends React.Component {
  
  setBannerSubtitle(bannerState, headerStyle){
    if(bannerState === 'designer'){
      if(headerStyle !== 'light'){
        this.props.setHeaderStyle('light');
      }
      return (
        <h2 id="subtitleDesigner" className="banner__subtitle banner__subtitle--designer banner__subtitle--active">
          As a designer from the outset, I look to my arts background to ensure my work is unique and engaging and leaves its mark on the digital universe.
        </h2>
      )
    } else if(bannerState === 'developer') {
      if(headerStyle !== 'dark'){
        this.props.setHeaderStyle('dark');
      }
      return (
        <h2 id="subtitleDeveloper" className="banner__subtitle banner__subtitle--developer banner__subtitle--active">
          As a developer, I thrive on getting lost in my editor, crafting clean, organized, and accessible code.
        </h2>
      )
    } else if (bannerState === 'strategist') {
      if(headerStyle !== 'light'){
        this.props.setHeaderStyle('light');
      }
      return (
        <h2 id="subtitleStrategist" className="banner__subtitle banner__subtitle--strategist banner__subtitle--active">
          A strategist at heart, with the constant need to innovate, I enjoy the challenges and opportunities every new project brings.
        </h2>
      )
    } else if (bannerState === 'default') {
      if(headerStyle !== 'dark'){
        this.props.setHeaderStyle('dark');
      }
    }
  }
  
  render(){
    return (
      <section id="banner" className={`banner banner--split banner--${this.props.bannerState}`}>
        <div className="banner__introduction">
          <div className="banner__content">
            <div className="banner__header">
              <h1 className="banner__title">
                <span className="banner__title-small">
                  Hi, my name is Mikal Morello,  I am a:
                </span>
                <span className="banner__title-large">
                  <button className="banner__button banner__button--designer" onClick={(e)=>this.props.setBannerState('designer')}>Designer</button>, <button className="banner__button banner__button--developer" onClick={(e)=>this.props.setBannerState('developer')}>developer</button>, and <button className="banner__button banner__button--strategist" onClick={(e)=>this.props.setBannerState('strategist')}>digital strategist</button>.
                </span>
              </h1>
              {this.setBannerSubtitle(this.props.bannerState, this.props.headerStyle )}
            </div>
            <div className="banner__link">
              <a href="#main" className="scroll">Learn More</a>
            </div>
          </div>
          <div className="banner__portrait">
            <button id="bannerPortrait" className="banner__portrait-button" onClick={(e)=>this.props.setBannerState('default')}>
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