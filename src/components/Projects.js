import React from 'react';
import Header from './Header'
import Navigation from './Navigation'
import ProjectsBanner from './ProjectsBanner'
import ProjectsMain from './ProjectsMain'
import Footer from './Footer'

class Projects extends React.Component {
  
  render(){
    
    return (
      <>
        <Header />
        <Navigation />
        <ProjectsBanner />
        <ProjectsMain />
        <Footer />
      </>
    )
  }
  
}

export default Projects;