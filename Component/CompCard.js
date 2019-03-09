import React, { Component } from 'react';
import xyz from'../xyz.jpg';
class CompCard extends Component {
	constructor(props){
		super(props);
		this.state={
			arr:[
				{
					icon:"promoted",
					name:"University name 1",
					location:"location"
				},
				{
					icon:"promoted",
					name:"University name 2",
					location:"location"
				},
				{
					icon:"promoted",
					name:"University name 3",
					location:"location"
				},
				{
					icon:"promoted",
					name:"University name 4",
					location:"location"
				},
				{
					icon:"promoted",
					name:"University name 5",
					location:"location"
				},
				{
					icon:"promoted",
					name:"University name 6",
					location:"location"
				}
			]
		
		}
	}
	render() 
	{
		const op=this.state.arr.map(item => {
			return(
				<div className="col-lg-4">
			
				  <div className="card text-dark bg-light mb-4">
						<img src={xyz} className="card-img-top" alt="image"/>
						<div className="card-img-overlay">
							<div className="top-left tabcontent">
                            
							<svg width="70" height="20" top="0">
		
							<rect width="70" height="20" rx="20" ry="20"/>
							<text x="50%" y="50%" text-anchor="middle" font-size="11">{item.icon}</text>
						
					
							</svg>
							</div>
							<h3><b>{item.name}</b></h3>
							<span>
								<i className="fas fa-map-marker-alt"><b  id="mark">{item.location}</b></i>
							</span>
					</div>
					<div className="card-body">
						<p className="card-text">Public,4-year College</p>
						<div>
							
							<small className="text-muted" id="la">In-State</small>
							<small className="text-muted" id="ra">$7,000</small>
							<small className="text-muted" id="la">Out-Of-State</small>
							<small className="text-muted" id="ra">$12,000</small>
							<small className="text-muted" id="la">Acceptance</small>
							<small className="text-muted" id="ra">100%</small>
						</div>
					</div>
				</div>
				
				</div>
			)
		})
    	return (
			<div className="container">
      		<h2>Featured Schools</h2>
		    <div className="row">
				{op}
			</div>
			</div>
					
					);
					}
		
	
  }


export default CompCard;
