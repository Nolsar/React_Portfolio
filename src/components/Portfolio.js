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
                  <h5 style={{textAlign:'center'}}>
                    <a href={item.deployedapp}>{item.name}</a>
                    </h5>
                    <h6 style={{textAlign:'center'}}>
                      <a href={item.githuburl}>
                        Project Repository
                      </a>
                    </h6>
                  <div className="item-wrap">
                    <a href="{#modal_01}">
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