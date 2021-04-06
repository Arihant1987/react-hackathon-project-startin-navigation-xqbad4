import React from "react";
import {BrowserRouter as Router, Route, Switch, useHistory} from "react-router-dom";
import "./style.css";
import Report from './report';
import Sell from './Sell';
import Buy from './buy';

function Home() {
  const history = useHistory();

  const handleChange = () => {
    const form = document.forms.loginform;
    const startfrom = form.startfrom.value;

    if(form.userid.value==="SaxoAdmin" && form.password.value==="password") {
      history.push(`${startfrom}`);
    }
  };

  return (
      <form name="loginform">
        <label>User ID</label>
        <input type="text" name="userid" />
        <br />
        <label>Password</label>
        <input type="password" name="password" />
        <br />
        <label>Start from</label>
        <select name="startfrom">
          <option value="buy">Buy</option>
          <option value="sell">Sell</option>
          <option value="report">Insights</option>
        </select>
        <br />
        <input type="button" value="Login" onClick={handleChange} />
      </form>
  );
}

function App() {
  return (
    <Router>
      <Route path="/buy" exact component={Buy} />
      <Route path="/sell" exact component={Sell} />
      <Route path="/report" exact component={Report} />
      <Route path="/" exact component={Home} />
    </Router>
  );
}

export default App;