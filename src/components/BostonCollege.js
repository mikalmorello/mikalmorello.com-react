import React from 'react';
import Header from './Header'
import Navigation from './Navigation'
import BostonCollegeBanner from './BostonCollegeBanner'
import BostonCollegeMain from './BostonCollegeMain'
import Footer from './Footer'

class BostonCollege extends React.Component {

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
        <BostonCollegeBanner />
        <BostonCollegeMain />
        <Footer />
      </>
    )
  }
  
}

export default BostonCollege;