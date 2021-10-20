import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoginPage from './MyComponents/LoginPage.js';
import SignUpPage from './MyComponents/SignUpPage';

function App() {
  return (
    <>
        <Router>
          <div>
            <Switch>
              <Route exact path="/">
                <LoginPage />
              </Route>
              <Route exact path="/homepage">
                <h1>You have successfully logged in</h1>
              </Route>
              <Route exact path="/signup">
                <SignUpPage />
              </Route>
            </Switch>
          </div>
        </Router>
    </>
  );
}

export default App;

