import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                  <h5>{item.name}</h5>
                    <a href={item.deployedapp}>
                      <img src={`${item.imgurl}`} alt="project" className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <p>{item.description}</p>
                          {/* <p>{item.deployedapp}</p> */}
                          {/* <p><a href={item.githuburl}>
                          Github Repository
                          </a>
                            </p> */}
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}