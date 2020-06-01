import React from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import GetTasks from './pages/GetTasks';
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import AuthRoute from './routes/AuthRoute';

function App() {
  return (
    <Router>
      <div style={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">
              Github Auth
            </Typography>
          </Toolbar>
        </AppBar>
        {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
        <Switch>
          <AuthRoute path="/signin" type="guest">
            <Home />
          </AuthRoute>
          <AuthRoute path="/user/tasks" type="private">
            <GetTasks />
          </AuthRoute>
          <Redirect from="/" to="/signin" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
