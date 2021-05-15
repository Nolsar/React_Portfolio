import React, { Component } from 'react';

export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <p className="lead">
              Feel free to contact me for any work or suggestions below.
              </p>
          </div>
        </div>
        <div className="row">
          <aside className="eigth columns footer-widgets">
            <div className="widget">
              <h4 style={{ textAlign: 'center' }}>
                <p>LinkedIn: <a href={resumeData.linkedinId}> click here!</a></p>
                <p>Email: s.nolan1128@rutgers.edu</p>
              </h4>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}