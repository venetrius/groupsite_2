import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Home'
import Register from './Register'
import { connect } from "react-redux";
import { addUser } from "./redux/actions";


function App({ add }) {
  return (
    <div className="App">
    <Router>
      <Switch>
          <Route path="/session">
            <Register/>
          </Route>
          <Route path="/users">
            hello users
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
    </Router>


    </div>
  );
}

export default connect(null, { add: addUser })(App);
