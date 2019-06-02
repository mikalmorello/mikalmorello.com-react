import React from 'react';
import Home from './components/Home'
import Projects from './components/Projects'
import Contact from './components/Contact'
import TuftsMagazine from './components/TuftsMagazine'
import TuftsStandard from './components/TuftsStandard'
import BostonCollegeRedesign from './components/BostonCollegeRedesign'
import { 
  BrowserRouter as Router, 
  Route,
  NavLink
} from 'react-router-dom';

const Links = () => (
  <nav>
    <NavLink exact activeClassName="active" to="/">Home</NavLink>
    <NavLink activeClassName="active" to='/projects'>Projects</NavLink>
    <NavLink activeClassName="active" to='/contact'>Contact</NavLink>
  </nav>
)

class App extends React.Component {
  
  render(){
    
    return (
      <Router>
          <Links />
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route path="/tufts-magazine" component={TuftsMagazine} />
          <Route path="/tufts-university-web-standard" component={TuftsStandard} />
          <Route path="/boston-college-redesign" component={BostonCollegeRedesign} />
      </Router>
    );
  }
}

export default App
  
  