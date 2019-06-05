import React from 'react';
import Header from './Header'
import Navigation from './Navigation'
import ProjectsBanner from './ProjectsBanner'
import ProjectsMain from './ProjectsMain'
import Footer from './Footer'

class Projects extends React.Component {
  
  checkHeaderStyle(headerStyle){
    if(headerStyle !== 'light'){
      this.props.setHeaderStyle('light');
    }
  }
  
  render(){
    
    document.body.classList.add('body--projects');
    
    return (
      <>
        {this.checkHeaderStyle(this.props.headerStyle)}
        <Header 
          setMenuState={this.props.setMenuState}
          menuState={this.props.menuState}
          headerStyle={this.props.headerStyle}
        />
        <Navigation 
          menuState={this.props.menuState}
          closeMenu={this.props.closeMenu}
        />
        <ProjectsBanner />
        <ProjectsMain />
        <Footer />
      </>
    )
  }
  
}

export default Projects;