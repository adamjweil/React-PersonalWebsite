import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class WebScraper extends Component {
  constructor() {
    super();
  }

render() {
  return(
    <div className="projectOverview">
        <div className="projectName">
          <h2>Adam's Web Scraper</h2>
        </div>
        <div className="projectTitle">

        </div>

        <div className="projectDescription">
          <h3>DESCRIPTION</h3>
          <p>
            The simple web app provides an easy way to scrape websites for content located within {`<h1>, <h2>, <h3>, <h4>, and <p>`}  tags, as well links and photos. On the Home Page you can see the ten most recently scraped URLs by anyone (using this app, obviously). Below the recently scraped URLs section, there is an input field where you can enter the URL that you wish to scrape.  A list of the URLs that you've scraped can easily be accessed by navigating to the 'Hisory' page. This data is not stored in our database, so deleting your cookies will erase your scraping history. eaThis information is not stored in a database, so you c You can easily access your search history by navigating to the 'History' page.  After submitting a URL, you'll be redirected to a page displaying an organized few of all the scraped content, links, and photos. If the page being scraped has a large amount of content, you can use the 'Quick Links' section on the top left of the results page to navigate the data more easily and effiently.
        </p>

          <div className="techStack">
            <h3>TECH STACK</h3>
            <div className="frontEnd">
              <div className="techTitles">
                <h4>FRONT END  <i className="glyphicon glyphicon-chevron-right"></i></h4>
              </div>
              <div className="techDetails">
                <p>This app was built using Ruby on Rails, and styled with Bootstrap. A couple Ruby gems in particular helped make this scraping algorithm much more dynamic and seamless. Nokogiri, and HTTParty</p>
              </div>
              <div className="techDetails">

              </div>
            </div>

          </div>
        </div>
      </div>



    );
  }
}

export default WebScraper;
