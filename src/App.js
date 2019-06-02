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
  
  render(){
    
    return (
      <Router>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route path="/tufts-magazine" component={TuftsMagazine} />
          <Route path="/tufts-university-web-standard" component={TuftsStandard} />
          <Route path="/boston-college-redesign" component={BostonCollege} />
      </Router>
    );
  }
}

export default App
  
  