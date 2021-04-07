import React from "react";
import Landing from './landing';


const Trading = () => {
  
return(
  <div class="basic-layout">
    <Landing />
    <div class="trade-table-container">
      <table class="trade-table">
        <caption>Trading Data</caption>
        <thead>
          <tr>
            <th>Instrument</th>
            <th>B/S</th>
           <th>Amount</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>EURCHF</td>
            <td>S</td>
            <td>100K</td>
            <td>1901.01</td>
          </tr>
          <tr>
            <td>XAUEUR</td>
            <td>S</td>
            <td>100K</td>
            <td>1713.5</td>
          </tr>
          <tr>
            <td>GBPUSD</td>
            <td>S</td>
            <td>100K</td>
            <td>1352</td>
          </tr>
          <tr>
            <td>GBPUSD</td>
            <td>S</td>
            <td>100K</td>
            <td>2400</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  );
};

export default Trading;