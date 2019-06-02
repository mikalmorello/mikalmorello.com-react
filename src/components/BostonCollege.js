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
        <Header 
          setMenuState={this.props.setMenuState}
          menuState={this.props.menuState}
          headerStyle={this.props.headerStyle}
        />
        <Navigation 
          menuState={this.props.menuState}
        />
        <BostonCollegeBanner />
        <BostonCollegeMain />
        <Footer />
      </>
    )
  }
  
}

export default BostonCollege;