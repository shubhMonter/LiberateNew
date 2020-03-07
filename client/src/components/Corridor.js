import React, {Component} from 'react';

export default class Corridor extends Component {
  render() {
    return (<div className="App">
    	<link rel="stylesheet" href="/corridor/category.css"/>
      	<link  rel="stylesheet" href="/corridor/comp.css" />
      <div className="col s6">
        <h4 className="branding">Corridor</h4>
      </div>
      <div id="ch" style={{marginLeft:'300px',marginTop:'10%',position:'fixed'}}>
        <nav>

          <ul className="list">
            <li><a href="#">Home</a></li>
            <li><a href="#">Atmospheric </a></li>
            <li><a href="#">Biotechnology</a></li>
            <li><a href="#">Environment Science</a></li>
            <li><a href="#">Geology</a></li>
            <li className="sub"><a href="#">Computer Scienc</a>
              <nav className="submenu">
                <ul>
                  <li><a href="#">DataBase</a></li>
                  <li><a href="#">FrontEnd</a></li>
                  <li><a href="#">Cyber Security</a></li>
                  <li className="sub"><a href="#">Logic</a>
                    <nav className="submenu">
                      <ul>
                        <li><a href="#">Artificial Intillegence</a>
                          <nav className="submenu">
                            <ul>
                              <li><a href="/classroom" className="ml">Machine Learning</a></li>
                              <li><a href="#">Deep Learning</a></li>
                            </ul>
                          </nav>
                        </li>
                        <li><a href="#">Operating System</a></li>
                        <li><a href="#">Game Developer</a></li>
                        <li><a href="#">APP Developer</a></li>
                      </ul>
                    </nav>
                  </li>
                  <li><a href="#">Sales</a></li>
                  <li><a href="#">Marketing</a></li>


                </ul>
              </nav>
            </li>
          </ul>
        </nav>
      </div>
            </div>)
  }
}
