import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import Button from 'react-bootstrap/lib/Button';

class CoinStache extends Component {
  constructor() {
    super();
  }

render() {
  return(
    <div className="projectOverview">
      <div className="projectName">
        <h2>CoinStache</h2>
      </div>
      <div className="projectTitle">
        
      </div>

    <div className="projectDescription">
      <h3>DESCRIPTION</h3>
      <p>Brings all CryptoCurrency related news, market-data & other user-generated content together into one easy-to-use mobile application. Users can buy/sell Bitcoin, Ethereum, and Litecoin through their comprehensive Coin’Stache wallet, as well as easily transfer balances to one another, in a similar fashion to Venmo.</p>

      <div className="techStack">
        <h3>TECH STACK</h3>
        <div className="frontEnd">
          <div className="techTitles">
            <h4>FRONT END  <i className="glyphicon glyphicon-chevron-right"></i></h4>
          </div>
          <div className="techDetails">
            <p>This mobile application was developed using a React Native front-end framework. The main purpose behind this decision was to have the ability to run the application across multiple different devices without having to alter the code base significantly. </p>
          </div>
        </div>

        <div className="frontEnd">
          <div className="techTitles">
            <h4>BACK END  <i className="glyphicon glyphicon-chevron-right"></i></h4>
          </div>
          <div className="techDetails">
            <p>This application is supported with a Ruby On Rails back-end. With most of the time intensive aspects of the development being consumed in our fron-end, we needed a back-end that would allow for rapid development and scalability.</p>
          </div>
        </div>

        <div className="frontEnd">
          <div className="techTitlesLong">
            <h4>FRAMEWORKS  <i className="glyphicon glyphicon-chevron-right"></i></h4>
          </div>
          <div className="techDetails">
            <p>NPM, Webpack, Yarn </p>
          </div>
        </div>
      </div>

    </div>
</div>

    );
  }
}

export default CoinStache;
