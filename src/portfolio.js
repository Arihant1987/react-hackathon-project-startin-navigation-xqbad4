import React from "react";
import Landing from './landing';

const Portfolio = () => {
return (<div class="basic-layout">
  <Landing />
    <h1>Portfolio 7738899 </h1>
    <div>
      <h2>Account Overview</h2>
      <div class="assets">
        <div class="heading">Account value(EUR)</div>
        <div>3,762,381.23</div>
      </div> 
      <div class="assets">
        <div class="heading">Cash (EUR)</div>
        <div>3,784,381.93</div>
      </div>  
    </div>

    <div>
      <h2>Positions and Cash</h2>
      <table class="trade-table">
        <caption>Forex</caption>
        <thead>
          <tr>
            <th>Instrument</th>
            <th>P/L</th>
           <th>Exposure</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>EURCHF</td>
            <td style={{color: 'green'}}>5,348</td>
            <td>200,000</td>
          </tr>
          <tr>
            <td>XAUEUR</td>
            <td style={{color: 'red'}}>-10,792</td>
            <td>146,163</td>
          </tr>
          <tr>
            <td>GBPUSD</td>
            <td style={{color: 'green'}}>9,589</td>
            <td>116,104</td>
          </tr>
          
        </tbody>
      </table>
      <table class="trade-table">
        <caption>CFDs</caption>
        <thead>
          <tr>
            <th>Instrument</th>
            <th>P/L</th>
           <th>Exposure</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>EURCHF</td>
            <td style={{color: 'green'}}>5,348</td>
            <td>200,000</td>
          </tr>
          <tr>
            <td>XAUEUR</td>
            <td style={{color: 'red'}}>-10,792</td>
            <td>146,163</td>
          </tr>
          <tr>
            <td>GBPUSD</td>
            <td style={{color: 'green'}}>9,589</td>
            <td>116,104</td>
          </tr>
          
        </tbody>
      </table>  
    </div>
  </div>
  ) ;
};

export default Portfolio;