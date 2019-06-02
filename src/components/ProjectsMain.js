import React from 'react';

class ProjectsMain extends React.Component {
  
  render(){
    return (
      <main id="main" className="main">
        <section id="sectionProjects" className="section section--projects fadein">
          <div className="projects projects--horizontal">
            <div className="projects__container">
              <article className="project-card">
                <a className="project-card__content" href="/tufts-magazine.html">
                  <h2 className="project-card__title">Tufts Magazine</h2>
                  <ul className="project-card__tags">
                    <li className="project-card__tag">Development</li>
                  </ul>
                  <div className="project-card__media">
                    <img src="/assets/images/project-tufts-magazine-card.jpg" alt="Tufts Magazine Thumbnail"/>
                  </div>
                </a>
              </article>
              <article className="project-card">
                <a className="project-card__content" href="/tufts-university-web-standard.html">
                  <h2 className="project-card__title">Tufts Standard</h2>
                  <ul className="project-card__tags">
                    <li className="project-card__tag">Development</li>
                    <li className="project-card__tag">Strategy</li>
                  </ul>
                  <div className="project-card__media">
                    <img src="/assets/images/project-tufts-standard-card.jpg" alt="Tufts D8 Standard Thumbnail"/>
                  </div>
                </a>
              </article>
              <article className="project-card">
                <a className="project-card__content" href="/boston-college-redesign.html">
                  <h2 className="project-card__title">Boston College Website Redesign</h2>
                  <ul className="project-card__tags">
                    <li className="project-card__tag">UX</li>
                    <li className="project-card__tag">Strategy</li>
                  </ul>
                  <div className="project-card__media">
                    <img src="/assets/images/project-boston-college-card.jpg" alt="Boston College Redesign Thumbnail"/>
                  </div>
                </a>
              </article>
            </div>
          </div>
        </section>
        <section id="sectionOtherProject" className="section section--other-projects fadein">
          <div className="other-projects">
            <div className="other-projects__divider">
              <img src="/assets/images/wave-divider.svg" alt=""/>
            </div>
            <h2 className="other-projects__title">Other Projects</h2>
            <ul className="other-projects__list">
              <li className="other-projects__list-item">Tufts.edu</li>
              <li className="other-projects__list-item">Tufts Summer Sessions</li>
              <li className="other-projects__list-item">Tufts Dental</li>
              <li className="other-projects__list-item">Tufts Global</li>
              <li className="other-projects__list-item">Boston College Alumni &amp; Friends</li>
              <li className="other-projects__list-item">BC Social</li>
              <li className="other-projects__list-item">BC Grouper</li>
              <li className="other-projects__list-item">Eagelapps</li>
              <li className="other-projects__list-item">150 on the road</li>
              <li className="other-projects__list-item">CASE District 1</li>
              <li className="other-projects__list-item">Accessibility Analytics</li>
            </ul>
          </div>
        </section>
        <section id="sectionContact" className="section section--contact fadein">
          <div className="contact-card contact-card--minimal">
            <div className="contact-card__container">
              <h2 className="contact-card__titles">
                <a href="/contact">
                  <span className="contact-card__title">Let's Connect</span> 
                </a>
              </h2>
            </div>
          </div>
        </section>
      </main>
    )
  }
  
}

export default ProjectsMain;