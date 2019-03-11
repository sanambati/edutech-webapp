import React, { Component } from 'react';
import './App.css';
import './css/mbr-additional.css';
import './css/bootstrap.min.css';
import './css/styles.css';
import './css/style.css';

import './fonts/socicon.eot';
import './fonts/socicon.svg';
import './fonts/socicon.ttf';
import './fonts/socicon.woff';

class App extends Component {
  render() {
    return (
		<div className="App">
			<section className="header10 cid-rgy1LnwygH mbr-fullscreen" id="header10-3">
				<div className="container">
				</div>
			</section>

			<section className="cid-qTkAaeaxX5" id="footer1-2">
				<div className="container">
					<h1 style={{color:'white'}}>AllAboutSchools</h1>
					<br/>
					<div className="media-container-row content text-white">
						<div className="col-12 col-md-3">
							<div className="media-wrap">
								<p>All round school search engine</p>
							</div>
						</div>
						<div className="col-12 col-md-3 mbr-fonts-style display-7">
							<h5 className="pb-3">
							  Contact Us
							</h5>
							
							
							<p className="mbr-text">
								Email: support@aas.com
								<br/>Phone:  999999999
								<br/>Fax:  000 0000 002
							</p>
						</div>
						<div className="col-12 col-md-3 mbr-fonts-style display-7">
							<h5 className="pb-3">
								About Us
							</h5>
							<p className="mbr-text">
								<a className="text-primary" href="#">FAQs</a>
								<br/><a className="text-primary" href="#">Features</a>
								<br/><a className="text-primary" href="#">How our website works</a>
								<br/><a className="text-primary" href="#">Feedback</a>
							</p>
						</div>
						<div className="col-12 col-md-3 mbr-fonts-style display-7">
							<h5 className="pb-3">
								Links
							</h5>
							<p className="mbr-text">
								<a className="text-primary" href="#">Download on Windows</a>
								<br/><a className="text-primary" href="#">Download on Mac</a>
							</p>
						</div>
					</div>
					<div className="footer-lower">
						<div className="media-container-row">
							<div className="col-sm-12">
								<hr/>
							</div>
						</div>
						<div className="media-container-row mbr-white">
							<div className="col-md-6">
								<div className="social-list align-right">
									<div className="soc-item">
										<a href="#" target="_blank">
											<span className="socicon-twitter socicon mbr-iconfont mbr-iconfont-social"></span>
										</a>
									</div>
									<div className="soc-item">
										<a href="#" target="_blank">
										  <span className="socicon-facebook socicon mbr-iconfont mbr-iconfont-social"></span>
										 </a>
									</div>
									<div className="soc-item">
										<a href="#" target="_blank">
											<span className="socicon-instagram socicon mbr-iconfont mbr-iconfont-social"></span>
										</a>
									</div>
									<div className="soc-item">
										<a href="#" target="_blank">
											<span className="socicon-googleplus socicon mbr-iconfont mbr-iconfont-social"></span>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
    );
  }
}

export default App;
