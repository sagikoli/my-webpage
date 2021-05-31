import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Header from './components/Header';
import Projects from './components/Projects';
import Resume from './components/Resume';

function App() {
  return (
    <Router>
      <div className="h-100 d-flex flex-column">
        <Header />
        <Switch className="tab-content">
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;



