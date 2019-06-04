import React from 'react';
import Header from './Header'
import Navigation from './Navigation'
import TuftsMagazineBanner from './TuftsMagazineBanner'
import TuftsMagazineMain from './TuftsMagazineMain'
import Footer from './Footer'

class TuftsMagazine extends React.Component {
  
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
        />
        <TuftsMagazineBanner />
        <TuftsMagazineMain />
        <Footer />
      </>
    )
  }
  
}

export default TuftsMagazine;