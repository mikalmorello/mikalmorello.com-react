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
        <Header />
        <Navigation />
        <ContactBanner />
        <ContactMain />
        <Footer />
      </>
    )
  }
  
}

export default Contact;