import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import React, { Fragment } from "react";
import CreateEmployee from "./pages/createEmployee/createEmployee";
import EmployeeList from "./pages/employeeList/employeeList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Fragment>
        <div className="wrapper">
          <Router>
            <Switch>
              <Route path="/" component={CreateEmployee} exact></Route>
              <Route path="/list" component={EmployeeList} exact></Route>
            </Switch>
          </Router>
        </div>
      </Fragment>
    </div>
  );
}

export default App;
