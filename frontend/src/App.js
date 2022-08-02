import './App.css';
import Home from './components/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
    <div>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;