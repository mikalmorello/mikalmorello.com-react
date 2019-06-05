import React from 'react';
import Header from './Header'
import Navigation from './Navigation'
import ContactBanner from './ContactBanner'
import ContactMain from './ContactMain'
import Footer from './Footer'

class Contact extends React.Component {

  checkHeaderStyle(headerStyle){
    if(headerStyle !== 'dark'){
      this.props.setHeaderStyle('dark');
    }
  }
  
  render(){
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
        <ContactBanner />
        <ContactMain />
        <Footer />
      </>
    )
  }
  
}

export default Contact;