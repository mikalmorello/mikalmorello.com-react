import React from 'react';
import Header from './Header'
import Navigation from './Navigation'
import BostonCollegeBanner from './BostonCollegeBanner'
import BostonCollegeMain from './BostonCollegeMain'
import Footer from './Footer'

class BostonCollege extends React.Component {
  
  render(){
    return (
      <>
        <Header />
        <Navigation />
        <BostonCollegeBanner />
        <BostonCollegeMain />
        <Footer />
      </>
    )
  }
  
}

export default BostonCollege;