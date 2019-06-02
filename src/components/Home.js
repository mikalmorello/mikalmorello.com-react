import React from 'react';
import Header from './Header'
import Navigation from './Navigation'
import HomeBanner from './HomeBanner'
import HomeMain from './HomeMain'
import Footer from './Footer'

class Home extends React.Component {
  
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
        <HomeBanner />
        <HomeMain />
        <Footer />
      </>
    )
  }
  
}

export default Home;