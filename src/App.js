import React from 'react';
import Home from './components/Home'
import Projects from './components/Projects'
import Contact from './components/Contact'
import TuftsMagazine from './components/TuftsMagazine'
import TuftsStandard from './components/TuftsStandard'
import BostonCollege from './components/BostonCollege'
import ScrollToTop from './components/ScrollToTop'
import { 
  BrowserRouter as Router, 
  Route
} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuState: false,
      bannerState: 'default',
      headerStyle: 'dark'
    }
    this.setMenuState = this.setMenuState.bind(this);
    this.setBannerState = this.setBannerState.bind(this);
    this.setHeaderStyle = this.setHeaderStyle.bind(this);
  } 
  
  
  setMenuState(activeState){
    this.setState(prevState => ({
      menuState: !prevState.menuState
    }))
  }
  
  setBannerState(activeBanner){
    this.setState({
      bannerState: activeBanner
    })
  }
  
  setHeaderStyle(activeStyle){
    this.setState({
      headerStyle: activeStyle
    })
  }
  
  
  
  render(){
    return (
      <Router> 
        <ScrollToTop>
          <Route 
            exact path="/" 
            render={(props) => (
              <Home 
                {...props} 
                setMenuState={this.setMenuState} 
                menuState={this.state.menuState} 
                setBannerState={this.setBannerState} 
                bannerState={this.state.bannerState} 
                setHeaderStyle={this.setHeaderStyle} 
                headerStyle={this.state.headerStyle} 
              />
            )} 
          />
          <Route 
            path="/projects"
            render={(props) => (
              <Projects
                {...props} 
                setMenuState={this.setMenuState} 
                menuState={this.state.menuState}
                setHeaderStyle={this.setHeaderStyle} 
                headerStyle={this.state.headerStyle} 
              />
            )} 
          />
          <Route 
            path="/contact"
            render={(props) => (
              <Contact
                {...props} 
                setMenuState={this.setMenuState} 
                menuState={this.state.menuState}
                setHeaderStyle={this.setHeaderStyle} 
                headerStyle={this.state.headerStyle} 
              />
            )} 
          />
          <Route 
            path="/tufts-magazine"
            render={(props) => (
              <TuftsMagazine
                {...props} 
                setMenuState={this.setMenuState} 
                menuState={this.state.menuState}  
                setHeaderStyle={this.setHeaderStyle} 
                headerStyle={this.state.headerStyle} 
              />
            )} 
          />
          <Route 
            path="/tufts-university-web-standard"
            render={(props) => (
              <TuftsStandard
                {...props} 
                setMenuState={this.setMenuState} 
                menuState={this.state.menuState} 
                setHeaderStyle={this.setHeaderStyle} 
                headerStyle={this.state.headerStyle} 
              />
            )} 
          />
          <Route 
            path="/boston-college-redesign"
            render={(props) => (
              <BostonCollege
                {...props} 
                setMenuState={this.setMenuState} 
                menuState={this.state.menuState} 
                setHeaderStyle={this.setHeaderStyle} 
                headerStyle={this.state.headerStyle} 
              />
            )} 
          />
        </ScrollToTop>
      </Router>
    );
  }
}

export default App
  
  