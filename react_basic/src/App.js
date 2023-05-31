import { BrowserRouter as Router, Switch, Route,  Link } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import NavbarComponent from './components/Navbar';
import Posts from './pages/Posts';
import PostDetail from './pages/PostDetail';

function App() {
  return (
    <Router>
    <NavbarComponent></NavbarComponent>
    
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/posts" component={Posts} />
      <Route path="/about" component={About} />

      <Route path="/post/:id" component={PostDetail} />
    </Switch>
  </Router>
  );
}

export default App;
