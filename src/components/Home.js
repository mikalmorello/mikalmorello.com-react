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
        <Header />
        <Navigation />
        <HomeBanner />
        <HomeMain />
        <Footer />
      </>
    )
  }
  
}

export default Home;