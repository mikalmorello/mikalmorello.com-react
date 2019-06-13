import React from 'react';
import Header from './Header'
import Navigation from './Navigation'
import ContactBanner from './ContactBanner'
import ContactMain from './ContactMain'
import Footer from './Footer'

class Contact extends React.Component {

  render(){
    return (
      <>
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