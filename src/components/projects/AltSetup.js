import React, { Component } from 'react';
import { Panel, PanelGroup, Accordion } from 'react-bootstrap';
import { Container, Col, Row, Card, CardHeader, CardTitle, CardBlock, CardText, Button, Collapse, Badge, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';

import InstaCloneCarousal from './carousels/InstaCloneCarousal';
import CoinStache from './CoinStache';
import EatReview from './EatReview';
import InstaClone from './InstaClone';
import WebScraper from './WebScraper';

class AltSetup extends Component {
  constructor() {
    super();
    this.state = {
      collapse: false,
      activeTab: '1'
    };
    this.toggleTab = this.toggleTab.bind(this);
    this.toggleDescription = this.toggleDescription.bind(this);
  }
  toggleDescription() {
    this.setState({
      collapse: !this.state.collapse
    });
  }
  toggleTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

render() {
  return(
      <Container>

        <Row>
          <Col md={{size: 12}}>
            <Nav tabs>
              <NavItem>
                <NavLink
                 className={classnames({ active: this.state.activeTab === '1' })}
                 onClick={() => { this.toggleTab('1'); }} >
                   Coin'Stache
               </NavLink>
             </NavItem>
             <NavItem>
               <NavLink
               className={classnames({ active: this.state.activeTab === '2' })}
               onClick={() => { this.toggleTab('2'); }} >
                 Adam's Eat & Review
               </NavLink>
            </NavItem>
             <NavItem>
               <NavLink
               className={classnames({ active: this.state.activeTab === '3' })}
               onClick={() => { this.toggleTab('3'); }} >
                 React InstaClone
               </NavLink>
             </NavItem>
             <NavItem>
               <NavLink
               className={classnames({ active: this.state.activeTab === '4' })}
               onClick={() => { this.toggleTab('4'); }} >
                 Page Scraper
               </NavLink>
            </NavItem>

          </Nav>
            <TabContent activeTab={this.state.activeTab}>
             <TabPane tabId="1">
               <Row>
                 <CoinStache />
               </Row>
             </TabPane>
             <TabPane tabId="2">
               <Row>
                 <EatReview />
               </Row>
             </TabPane>
             <TabPane tabId="3">
               <Row>
                <InstaClone />
               </Row>
             </TabPane>
             <TabPane tabId="4">
               <Row>
                <WebScraper />
               </Row>
             </TabPane>
           </TabContent>
          </Col>
        </Row>

     </Container>
    );
  }
}

export default AltSetup;
