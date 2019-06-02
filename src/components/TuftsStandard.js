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
        <Header />
        <Navigation />
        <TuftsStandardBanner />
        <TuftsStandardMain />
        <Footer />
      </>
    )
  }
  
}

export default TuftsStandard;