import './App.css';
import Home from './components/Home';
import {checkTakedPixels} from './services/pixeles'
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {

  checkTakedPixels()


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