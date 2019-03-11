
import React, { Component } from 'react';
import {BrowserRouter as Router,Route, a as a} from 'react-router-dom';
import './header_menu.css';
const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)
const Schools = () => (
  <div>
    <h2>Schools</h2>
  </div>
)

const Blog = () => (
  <div>
    <h2>Blog</h2>
  </div>
)
const Page = () => (
  <div>
    <h2>Page</h2>
  </div>
)

const Contact = () => (
  <div>
    <h2>Contact</h2>
  </div>
)

class Header extends Component {
 /* construchrefr(props){
    super(props);
    this.pages = ['Home','About','Schools','Blog','Page','Contact'];
  }*/
  render() {
    return (
       <div className="Header">
         <header>
           <div className="container">
             <div className="homepage">
                <h1>AllAbout<span className="highlight">Schools</span></h1>
             </div>
             <nav>
                <ul>
                  <li><a href="/">Home</a></li>   
                  <li><a href="/about">About</a></li> 
                  <li><a href="/schools">Schools</a></li> 
                  <li><a href="/blog">Blog</a></li> 
                  <li><a href="/page">Page</a></li> 
                  <li><a href="/contact">Contact</a></li>
                </ul>
             </nav>
            </div>
         </header> 
       </div>
    );
  }
}
export default Header;
//{this.pages.map(item=><li><a href='/'>{item}</a></li>)}
 //{this.pages.map(item=><Route path='/' component={{item}}/>)}
 /*
                  <li><a href="/">Home</a></li>   
                  <li><a href="/about">About</a></li> 
                  <li><a href="/schools">Schools</a></li> 
                  <li><a href="/blog">Blog</a></li> 
                  <li><a href="/page">Page</a></li> 
                  <li><a href="/contact">Contact</a></li>


        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/schools" component={Schools}/>
        <Route exact path="/blog" component={Blog}/>
        <Route exact path="/page" component={Page}/>
        <Route exact path="/contact" component={Contact}/>
        */