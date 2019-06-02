import React from 'react';
import Header from './Header'
import Navigation from './Navigation'
import TuftsMagazineBanner from './TuftsMagazineBanner'
import TuftsMagazineMain from './TuftsMagazineMain'
import Footer from './Footer'

class TuftsMagazine extends React.Component {
  
  render(){
    return (
      <>
        <Header 
          setMenuState={this.props.setMenuState}
          menuState={this.props.menuState}
        />
        <Navigation 
          menuState={this.props.menuState}
        />
        <TuftsMagazineBanner />
        <TuftsMagazineMain />
        <Footer />
      </>
    )
  }
  
}

export default TuftsMagazine;