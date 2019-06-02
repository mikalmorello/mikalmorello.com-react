import React from 'react';
import Header from './Header'
import Navigation from './Navigation'
import TuftsStandardBanner from './TuftsStandardBanner'
import TuftsStandardMain from './TuftsStandardMain'
import Footer from './Footer'

class TuftsStandard extends React.Component {
  
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
        <TuftsStandardBanner />
        <TuftsStandardMain />
        <Footer />
      </>
    )
  }
  
}

export default TuftsStandard;