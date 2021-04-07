import React from "react";
import {BrowserRouter as Router, Route, Switch, useHistory} from "react-router-dom";
import "./style.css";
import Insights from './insights';
import Sell from './Sell';
import Buy from './buy';
import Trading from './trading';
import Portfolio from './portfolio';
import Funds from './funds';
import Landing from './landing';

function Home() {
  const history = useHistory();

  const handleChange = () => {
    const form = document.forms.loginform;
    const startfrom = form.startfrom.value || 'landing';

    if(form.userid.value==="SaxoAdmin" && form.password.value==="password") {
      history.push(`${startfrom}`);
    }
  };

  return (
      <div class="login-container">
        <header>Saxo <span class="tradergoText">TraderGo</span></header>
        <div class = "live-demo">
          <a class="live" href="#">LIVE</a>
          <a class="demo"href="#">DEMO</a>
        </div>
        <div class="form-container">
          <form name="loginform">
            <div class="cell">
              <label>User ID</label>
              <input type="text" name="userid" />
            </div>
            <div class="cell">
              <label>Password</label>
              <input type="password" name="password" />
            </div>
            <div class="cell">
            <label>Start from</label>
            <select name="startfrom">
              <option value=""></option>
              <option value="buy">Buy</option>
              <option value="sell">Sell</option>
              <option value="insights">Insights</option>
              <option value="trading">Trading</option>
              <option value="portfolio">Portfolio</option>
            </select>
            </div>
            <div class="cell">
              <input class="loginButton" type="button" value="Login" onClick={handleChange} />
            </div>
          </form> 
        </div>
        
      </div>
  );
}

function App() {
  return (
    <Router>
      <Route path="/buy" exact component={Buy} />
      <Route path="/sell" exact component={Sell} />
      <Route path="/insights" exact component={Insights} />
      <Route path="/trading" exact component={Trading} />
      <Route path="/landing" exact component={Landing} />
      <Route path="/portfolio" exact component={Portfolio} />
      <Route path="/funds" exact component={Funds} />
      <Route path="/landing" exact component={Landing} />
      <Route path="/" exact component={Home} />
    </Router>
  );
}

export default App;