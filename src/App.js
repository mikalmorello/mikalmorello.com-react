import React from 'react';
import Home from './components/Home'
import Projects from './components/Projects'
import Contact from './components/Contact'
import TuftsMagazine from './components/TuftsMagazine'
import TuftsStandard from './components/TuftsStandard'
import BostonCollege from './components/BostonCollege'
import { 
  BrowserRouter as Router, 
  Route,
  Link
} from 'react-router-dom';

const Links = () => (
  <nav>
    <Link exact activeClassName="active" to="/">Home</Link>
    <Link activeClassName="active" to='/projects'>Projects</Link>
    <Link activeClassName="active" to='/contact'>Contact</Link>
  </nav>
)

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuState: false
    }
    this.setMenuState = this.setMenuState.bind(this);
  } 
  
  
  setMenuState(activeState){
    this.setState(prevState => ({
      menuState: !prevState.menuState
    }))
  }
  
  render(){
    return (
      <Router>
          <Route 
            exact path="/" 
            render={(props) => (
              <Home 
                {...props} 
                setMenuState={this.setMenuState} 
                menuState={this.state.menuState} 
                headerStyle="dark"
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
                headerStyle="light"
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
                headerStyle="dark"
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
                headerStyle="dark"
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
                headerStyle="dark"
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
                headerStyle="dark"
              />
            )} 
          />
      </Router>
    );
  }
}

export default App
  
  