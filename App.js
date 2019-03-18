import React, { Component } from 'react';
import './jquery.filterselector.css';
import './component1/file.js';

class App extends Component {
  constructor(props)
	{
		super(props);
		this.state={
		schools : [
		{
			name:"ABC",
			major:"CSE",
			locatn:"west",
			rgion:"region2",
			type:'type2'
			},
			{
				name:"XYZ",
				major:"EEE",
				locatn:'north',
				rgion:'region3',
				type:'type4'
			},
			{
				name: "ABC1",
				major : "IT",
				locatn:"north",
				rgion : "region1",
				type : "type1"
			}
		],
		filteredArr:[],
		filteredArr1:[]
		}
		this.majors = ["CSE","IT","EEE","ECE"];
		this.types = ['type1','type2','type3','type4'];
		this.Region = ['region1','region2','region3','region4'];
		this.loction = ['north','south','east','west']
	}
	selectBranch = (Event)=>{
		console.log("Event",Event.target.value);
		const filteredArr = this.state.schools.filter(item=> item.major == Event.target.value)
		console.log("filteredArr",filteredArr);
		this.setState({
			filteredArr
		})
	}
		
	componentDidMount(){
		this.setState({
			filteredArr: this.state.schools,
		
		})
	}

  render() {
 
    return (
      <div className="App" style={{justifyContent:'center'}, {alignItems:'center'}, {margin:'150px'}}>
		<div id="jquery-script-menu">
		<div className="jquery-script-center">
		<h1><center><u>Your Schools</u></center></h1>
		</div>
		</div>
			<div className="container" style={{backgroundColor:'#A0CECB'}}>
				<center><h1>Filters</h1>

				<button type="submit" value="Submit" style={{backgroundColor:'white', color:'black'}}>Save</button>
				<button type="reset" value="Reset" style={{backgroundColor:'white', color:'black'}}>Reset</button><br/><br/>

				<h3>Major</h3>
				<p>
					<select title="Basic example two" name="example-two" onChange={this.selectBranch}>			
						{this.majors.map(item=> <option value={item}>{item}</option>)}
					</select>
				</p>
				<hr/>
				<h3>Location</h3>
				<p>
					<select title="Basic example two" name="example-two" >			
					{this.loction.map(lc=> <option value={lc}>{lc}</option>)}		
					</select>
				</p>
				<p>
					<select title="Basic example two" name="example-two">			
					{this.Region.map(rg=> <option value={rg}>{rg}</option>)}	
					</select>
				</p>
				<h3>School Type</h3>
				<p>
					<select title="Basic example one" name="example-one">
					{this.types.map(tp=> <option value={tp}>{tp}</option>)}
					</select>
				</p>
				</center>
			</div>
			<div>
			{
				this.state.filteredArr.map(item=>{
					console.log(item.name)
					return <div>{item.name}</div>
				})
			}
			</div>
      </div>
    );
  }
}

export default App;
