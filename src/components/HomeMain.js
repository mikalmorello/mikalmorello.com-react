import React from 'react';
import SvgCanon from './SvgCanon';

class HomeMain extends React.Component {
  
  render(){
    return (
      <main id="main" className="main">
        <section id="sectionIntroduction" className="section section--introduction">
          <div className="introduction fadein">
            <div className="introduction__container">
              <div className="introduction__text">
                <p>Currently the <span className="semi-bold">lead front-end web developer</span> at Tufts University, I am passionate about building scalable design systems that enhance the user-experience. From hands-on development to high-level strategic planning, I've done it all. Check out my latest work below:</p>
              </div>
              <div className="introduction__divider">
                <img src="/assets/images/wave-divider.svg" alt=""/>
              </div>
            </div>
          </div>
        </section>
        <section id="sectionProjects" className="section section--projects">
          <div className="projects">
            <div className="projects__container">
              <div className="project-teaser fadein">
                <div className="project-teaser__container">
                  <a href="/tufts-magazine.html" className="project-teaser__content">
                   <h3 className="project-teaser__title">
                      <span className="project-teaser__white-background">Tufts Magazine</span>
                    </h3>
                    <h4 className="project-teaser__subtitle">
                      <span className="project-teaser__white-background">Reimaging an award-winning print publication and bringing it t to life on the web</span>
                    </h4>
                  </a>
                  <div className="project-teaser__media">
                    <img src="/assets/images/project-tufts-magazine-thumbnail.png" alt="Tufts University Magazine screenshot" /> 
                  </div>
                </div>
              </div>
              <div className="project-teaser fadein"> 
                <div className="project-teaser__container">
                  <a href="/tufts-university-web-standard.html" className="project-teaser__content">
                   <h3 className="project-teaser__title">
                      <span className="project-teaser__white-background">Tufts Web Standard</span>
                    </h3>
                    <h4 className="project-teaser__subtitle">
                      <span className="project-teaser__white-background">Building a scalable web framework to support rapid production of university-wide Drupal 8 websites</span>
                    </h4>
                  </a>
                  <div className="project-teaser__media">
                    <img src="/assets/images/project-tufts-standard-thumbnail.jpg" alt="Tufts D8 Standard screenshot"  /> 
                  </div> 
                </div>
              </div>
              <div className="project-teaser fadein">
                <div className="project-teaser__container">
                  <a href="/boston-college-redesign.html" className="project-teaser__content">
                   <h3 className="project-teaser__title">
                      <span className="project-teaser__white-background">Boston College Website Redesign</span>
                    </h3>
                    <h4 className="project-teaser__subtitle">
                      <span className="project-teaser__white-background">Enhancing the digital gateway to Boston College using Adobe Experience Manager</span>
                    </h4>
                  </a>
                  <div className="project-teaser__media">
                    <img src="/assets/images/project-boston-college-thumbnail.jpg" alt="Boston College Redesign screenshot" /> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="sectionContact" className="section section--contact fadein">
          <div className="contact-card contact-card--full">
            <div className="contact-card__container">
              <h2 className="contact-card__titles">
                <a href="/contact">
                  <span className="contact-card__subtitle">Located in</span>
                  <span className="contact-card__title">Watertown Ma</span>
                </a>
              </h2>
              <div className="contact-card__icon">
                <span className="svgstore svgstore--cannon">
                  <SvgCanon />
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  }
  
}

export default HomeMain;