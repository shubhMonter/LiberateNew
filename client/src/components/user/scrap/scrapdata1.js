import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNamenames from 'classNamenames';
import {connect} from 'react-redux';
import { scrapData } from '../../../action/scrapAction';


const form = {
  marginLeft: '50rem',

};
  const form1={marginTop: '50rem'};
const blur ={
	textAlign:'-webkit-auto'
};
class Scrapdata extends Component {
  constructor(props){
		super(props);
		this.state={
      string:'nodejs',
      videos:{},
      errors: {}
		};
	}
  componentDidMount(){
    const userData={

      string:this.state.string
    };
      this.props.scrapData(userData);
  }
  render(){
      const { errors,videos } = this.state;
      let video;
      var myURL='';
      var v_id='';
console.log(this.props);
console.log(this.state);
if(this.props.videos.videos===null){
  console.log('loding');
}else{

   video = this.props.videos.videos.map(vid => (

  <div className="col-md-3" key={vid._id}>

    <div className="card carda">
      <iframe className="card-img-top" src="" frameborder="0" allow=" encrypted-media" allowfullscreen />

      <div className="card-body">
        <div className="col-md">
          <p className="card-text title text-center">{vid.title}</p>
        </div>
        <hr/>
        <div className="col-md text-center">
          <span> kjDElectronics</span>
          <p className="card-text "> 13 Jan,2017</p>
        </div>
        <hr/>
        <div className="col-md text-center">
          <span>Enroll Course<a href={vid.link}> <i className="fas fa-angle-double-right" /></a></span>
        </div>
      </div>


));}


      return (
          <div>
          <div className="tab-content">
          <div id="home" className="tab-pane active">
          <div className="row">
          <div role="tabpanel">
          <div className="col-sm-12">
            <div className="tab-content">
              <div role="tabpanel" className="tab-pane active" id="tab1">
                <div className="panel panel-primary">
                  <div className="panel-heading">
                    <span className="pull-left">

                      <ul className="nav panel-tabs">
                        <li className="active"><a href="#tab1" data-toggle="tab">Begginer</a></li>
                        <li><a href="#tab2" data-toggle="tab">Intermediate</a></li>
                        <li><a href="#tab3" data-toggle="tab">Advance</a></li>
                      </ul>
                    </span>
                    <span className="navbar-form pull-right" role="search">
                      <button className="btn btn-default" type="submit" ><i className="glyphicon glyphicon-search"/></button>
                    </span>
                    <span className="col-sm-2">
                      <div className="btn-group">
                        <button id="dropdown-toggle" type="button" className="form-control btn btn-default dropdown-toggle" data-toggle="dropdown">
                          LEVEL 1 <span className="caret"></span>
                        </button>
                        <ul id="dropdown-menu" className="dropdown-menu" role="menu">
                          <li role="presentation" className="brand-nav active"><a href="#tab11" aria-controls="tab1" role="tab" data-toggle="tab">LEVEL 1</a></li>
                          <li role="presentation" className="brand-nav"><a href="#tab12" aria-controls="tab2" role="tab" data-toggle="tab">LEVEL 2</a></li>
                          <li role="presentation" className="brand-nav"><a href="#tab13" aria-controls="tab3" role="tab" data-toggle="tab">LEVEL 3</a></li>
                        </ul>
                      </div>
                    </span>
                    <span className="col-sm-2">
                      <div className="btn-group">
                        <button id="dropdown-toggle2" type="button" className="form-control btn btn-default dropdown-toggle" data-toggle="dropdown">
                          Macro(max:10min) <span className="caret"></span>
                        </button>
                        <ul id="dropdown-menu2" className="dropdown-menu" role="menu">
                          <li role="presentation" className="brand-nav active"><a href="" aria-controls="tab1" role="tab" data-toggle="tab">Macro(max:10min)</a></li>
                          <li role="presentation" className="brand-nav"><a href="" aria-controls="tab2" role="tab" data-toggle="tab">Micro(max:5min)</a></li>
                        </ul>
                      </div>
                    </span>
                    <span className="col-md-1">
                      <select className="form-control select2">
                        <option>Filter</option>
                        <option>gearbox</option>
                        <option>suspension</option>
                        <option>engine</option>
                      </select>
                    </span>
                  </div>
                  <div className="panel-body">
                    <div className="tab-content">
                      <div role="tabpanel" className="tab-pane active" id="tab11">
                        <div className="col-md-3">
                          <div className="card carda">
                            <iframe className="card-img-top" src="https://www.youtube.com/embed/ki3B8a-jLrE" frameborder="0" allow=" encrypted-media" allowfullscreen></iframe>

                            <div className="card-body">
                              <div className="col-md">
                                <p className="card-text title text-center">C Beginners Tutorial</p>
                              </div>
                              <hr/>
                              <div className="col-md text-center">
                                <span> kjDElectronics</span>
                                <p className="card-text "> 13 Jan,2017</p>
                              </div>
                              <hr/>
                              <div className="col-md text-center">
                                <span>Enroll Course<a href="http://localhost/Liberate_Beta_latest/threeee/PAGES/New Third Pages/learning page/course.html"> <i className="fas fa-angle-double-right" ></i></a></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="card carda">
                            <iframe className="card-img-top" src="https://www.youtube.com/embed/9gtTdhNXbyw" frameborder="0" allow=" encrypted-media" allowfullscreen></iframe>

                            <div className="card-body">
                              <div className="col-md">
                                <p className="card-text title text-center">Java Beginners Tutorial</p>
                              </div>
                              <hr/>
                              <div className="col-md text-center">
                                <span> <a href="" data-toggle="modal" data-target="#myModal3">Raghav Pal</a></span>
                                <p className="card-text "> 13 Jan,2017</p>
                              </div>
                              <hr/>
                              <div className="col-md text-center">
                                <span>Read More<i className="fas fa-angle-double-right" ></i></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="card carda">
                            <iframe className="card-img-top" src="https://www.youtube.com/embed/cpPG0bKHYKc" frameborder="0" allow=" encrypted-media" allowfullscreen></iframe>


                            <div className="card-body">
                              <div className="col-md">
                                <p className="card-text title text-center">Python Beginners Tutorial</p>
                              </div>
                              <hr/>
                              <div className="col-md text-center">
                                <span> kjDElectronics</span>
                                <p className="card-text "> 13 Jan,2017</p>
                              </div>
                              <hr/>
                              <div className="col-md text-center">
                                <span>Read More<i className="fas fa-angle-double-right" ></i></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="card carda">
                            <iframe className="card-img-top" src="https://www.youtube.com/embed/WucKbK10B6A" frameborder="0" allow=" encrypted-media" allowfullscreen></iframe>


                            <div className="card-body">
                              <div className="col-md">
                                <p className="card-text title text-center"> HTML beginners Tutorial</p>
                              </div>
                              <hr/>
                              <div className="col-md text-center">
                                <span>Tutor</span>
                                <p className="card-text "> 13 Jan,2017</p>
                              </div>
                              <hr/>
                              <div className="col-md text-center">
                                <span>Read More<i className="fas fa-angle-double-right" ></i></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="card carda">
                            <iframe className="card-img-top" src="https://www.youtube.com/embed/yMclPkD4sQg" frameborder="0" allow=" encrypted-media" allowfullscreen></iframe>


                            <div className="card-body">
                              <div className="col-md">
                                <p className="card-text title text-center">PHP for beginners</p>
                              </div>
                              <hr/>
                              <div className="col-md text-center">
                                <span> yufen</span>
                                <p className="card-text "> 13 Jan,2017</p>
                              </div>
                              <hr/>
                              <div className="col-md text-center">
                                <span>Read More<i className="fas fa-angle-double-right" ></i></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="card carda">
                            <iframe className="card-img-top" src="https://www.youtube.com/embed/nN4Kjdverzs" frameborder="0" allow=" encrypted-media" allowfullscreen></iframe>

                            <div className="card-body">
                              <div className="col-md">
                                <p className="card-text title text-center">MYSql for beginners</p>
                              </div>
                              <hr/>
                              <div className="col-md text-center">
                                <span> Siraj Raval</span>
                                <p className="card-text "> 13 Jan,2017</p>
                              </div>
                              <hr/>
                              <div className="col-md text-center">
                                <span>Read More<i className="fas fa-angle-double-right" ></i></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="card carda">
                            <iframe className="card-img-top" src="https://www.youtube.com/embed/JPT3bFIwJYA" frameborder="0" allow=" encrypted-media" allowfullscreen></iframe>


                            <div className="card-body">
                              <div className="col-md">
                                <p className="card-text title text-center">What is React JS</p>
                              </div>
                              <hr/>
                              <div className="col-md text-center">
                                <span> Luis Serrano</span>
                                <p className="card-text "> 13 Jan,2017</p>
                              </div>
                              <hr/>
                              <div className="col-md text-center">
                                <span>Read More<i className="fas fa-angle-double-right" ></i></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="card carda">
                            <iframe className="card-img-top" src="https://www.youtube.com/embed/U8XF6AFGqlc" frameborder="0" allow=" encrypted-media" allowfullscreen></iframe>


                            <div className="card-body">
                              <div className="col-md">
                                <p className="card-text title text-center">NodeJS for beginners</p>
                              </div>
                              <hr/>
                              <div className="col-md text-center">
                                <span> Google Developers</span>
                                <p className="card-text "> 13 Jan,2017</p>
                              </div>
                              <hr/>
                              <div className="col-md text-center">
                                <span>Read More<i className="fas fa-angle-double-right" ></i></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div role="tabpanel" className="tab-pane " id="tab12">
                        <div className="col-md-3">
                          <div className="card carda">
                            <iframe className="card-img-top" src="https://www.youtube.com/embed/OGxgnH8y2NM" frameborder="0" allow=" encrypted-media" allowfullscreen></iframe>

                            <div className="card-body">
                              <div className="col-md">
                                <p className="card-text title text-center">Machine Learning - Tom Mitchell.pdf</p>
                              </div>
                              <hr/>
                              <div className="col-md text-center">
                                <span> Tom Mitchell 2</span>
                                <p className="card-text "> 13 Jan,2017</p>
                              </div>
                              <hr/>
                              <div className="col-md text-center">
                                <span>Enroll Course<a href="http://localhost/Liberate_Beta_latest/threeee/PAGES/New Third Pages/learning page/course.html"> <i className="fas fa-angle-double-right" ></i></a></span>
                              </div>
                            </div>
                          </div>
                        </div>



                        <div className="col-md-3">
                          <div className="card carda">
                            <iframe className="card-img-top" src="https://www.youtube.com/embed/z-EtmaFJieY" frameborder="0" allow=" encrypted-media" allowfullscreen></iframe>

                            <div className="card-body">
                              <div className="col-md">
                                <p className="card-text title text-center">The Fundamnetals of Machine Learning</p>
                              </div>
                              <hr/>
                              <div className="col-md text-center">
                                <span> Arjun Singh</span>
                                <p className="card-text "> 13 Jan,2017</p>
                              </div>
                              <hr/>
                              <div className="col-md text-center">
                                <span>Read More<i className="fas fa-angle-double-right" ></i></span>
                              </div>
                            </div>
                          </div>
                        </div>



                        <div className="col-md-3">
                          <div className="card carda">
                            <iframe className="card-img-top" src="https://www.youtube.com/embed/rMMTv7XLYw" frameborder="0" allow=" encrypted-media" allowfullscreen></iframe>


                            <div className="card-body">
                              <div className="col-md">
                                <p className="card-text title text-center">Let's have Machine Learning</p>
                              </div>
                              <hr/>
                              <div className="col-md text-center">
                                <span> Sejpal Singh</span>
                                <p className="card-text "> 13 Jan,2017</p>
                              </div>
                              <hr/>
                              <div className="col-md text-center">
                                <span>Read More<i className="fas fa-angle-double-right" ></i></span>
                              </div>
                            </div>
                          </div>
                        </div>



                        <div className="col-md-3">
                          <div className="card carda">
                            <iframe className="card-img-top" src="https://www.youtube.com/embed/UzxYlbK2c7E" frameborder="0" allow=" encrypted-media" allowfullscreen></iframe>


                            <div className="card-body">
                              <div className="col-md">
                                <p className="card-text title text-center"> Lecture 1 | Machine Learning (Stanford) - YouTube</p>
                              </div>
                              <hr/>
                              <div className="col-md text-center">
                                <span> Andrew NJ</span>
                                <p className="card-text "> 13 Jan,2017</p>
                              </div>
                              <hr/>
                              <div className="col-md text-center">
                                <span>Read More<i className="fas fa-angle-double-right" ></i></span>
                              </div>
                            </div>
                          </div>
                        </div>



                        <div className="col-md-3">
                          <div className="card carda">
                            <iframe className="card-img-top" src="https://www.youtube.com/embed/nKW8Ndu7Mjw" frameborder="0" allow=" encrypted-media" allowfullscreen></iframe>


                            <div className="card-body">
                              <div className="col-md">
                                <p className="card-text title text-center">The 7 Steps of Machine Learning - YouTube</p>
                              </div>
                              <hr/>
                              <div className="col-md text-center">
                                <span> yufen</span>
                                <p className="card-text "> 13 Jan,2017</p>
                              </div>
                              <hr/>
                              <div className="col-md text-center">
                                <span>Read More<i className="fas fa-angle-double-right" ></i></span>
                              </div>
                            </div>
                          </div>
                        </div>


                        <div className="col-md-3">
                          <div className="card carda">
                            <iframe className="card-img-top" src="https://www.youtube.com/embed/IpGxLWOIZy4" frameborder="0" allow=" encrypted-media" allowfullscreen></iframe>

                            <div className="card-body">
                              <div className="col-md">
                                <p className="card-text title text-center">What is machine learning? - YouTube</p>
                              </div>
                              <hr/>
                              <div className="col-md text-center">
                                <span> Siraj Raval</span>
                                <p className="card-text "> 13 Jan,2017</p>
                              </div>
                              <hr/>
                              <div className="col-md text-center">
                                <span>Read More<i className="fas fa-angle-double-right" ></i></span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="card carda">
                            <iframe className="card-img-top" src="https://www.youtube.com/embed/v=cKxRvEZd3Mw" frameborder="0" allow=" encrypted-media" allowfullscreen></iframe>


                            <div className="card-body">
                              <div className="col-md">
                                <p className="card-text title text-center">A Friendly Introduction to Machine Learning - YouTube</p>
                              </div>
                              <hr/>
                              <div className="col-md text-center">
                                <span> Luis Serrano</span>
                                <p className="card-text "> 13 Jan,2017</p>
                              </div>
                              <hr/>
                              <div className="col-md text-center">
                                <span>Read More<i className="fas fa-angle-double-right" ></i></span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="card carda">
                            <iframe className="card-img-top" src="https://www.youtube.com/embed/v=G6_nU_YO8jg" frameborder="0" allow=" encrypted-media" allowfullscreen></iframe>


                            <div className="card-body">
                              <div className="col-md">
                                <p className="card-text title text-center">Hello World - Machine Learning Recipes #1 - YouTube</p>
                              </div>
                              <hr/>
                              <div className="col-md text-center">
                                <span> Google Developers</span>
                                <p className="card-text "> 13 Jan,2017</p>
                              </div>
                              <hr/>
                              <div className="col-md text-center">
                                <span>Read More<i className="fas fa-angle-double-right" ></i></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div role="tabpanel" className="tab-pane" id="tab2">
                <div className="panel panel-primary">
                  <div className="panel-heading">
                    <span className="pull-left">

                      <ul className="nav panel-tabs">
                        <li className="active"><a href="#tab1" data-toggle="tab">Begginer</a></li>
                        <li><a href="#tab2" data-toggle="tab">Intermediate</a></li>
                        <li><a href="#tab3" data-toggle="tab">Advance</a></li>
                      </ul>
                    </span>
                    <span className="navbar-form pull-right" role="search">

                      <input className="form-control" placeholder="Search" name="srch-term" id="srch-term" type="text" />
                      <button className="btn btn-default" type="submit"><i className="glyphicon glyphicon-search"></i></button>
                    </span>

                    <span className="col-md-2">
                      <div className="btn-group">
                        <button id="dropdown-toggle" type="button" className="form-control btn btn-default dropdown-toggle" data-toggle="dropdown">
                          LEVEL 1 <span className="caret"></span>
                        </button>
                        <ul id="dropdown-menu" className="dropdown-menu" role="menu">
                          <li role="presentation" className="brand-nav active"><a href="#tab21" aria-controls="tab1" role="tab" data-toggle="tab">LEVEL 1</a></li>
                          <li role="presentation" className="brand-nav"><a href="#tab22" aria-controls="tab2" role="tab" data-toggle="tab">LEVEL 2</a></li>
                          <li role="presentation" className="brand-nav"><a href="#tab23" aria-controls="tab3" role="tab" data-toggle="tab">LEVEL 3</a></li>
                        </ul>
                      </div>
                    </span>
                    <span className="col-sm-2">
                      <div className="btn-group">
                        <button id="dropdown-toggle2" type="button" className="form-control btn btn-default dropdown-toggle" data-toggle="dropdown">
                          Macro(max:10min) <span className="caret"></span>
                        </button>
                        <ul id="dropdown-menu2" className="dropdown-menu" role="menu">
                          <li role="presentation" className="brand-nav active"><a href="" aria-controls="tab1" role="tab" data-toggle="tab">Macro(max:10min)</a></li>
                          <li role="presentation" className="brand-nav"><a href="" aria-controls="tab2" role="tab" data-toggle="tab">Micro(max:5min)</a></li>
                          </ul>
                      </div>
                    </span>
                    <span className="col-md-1">
                      <select className="form-control select2">
                        <option>Filter</option>
                        <option>Car</option>
                        <option>Bike</option>
                        <option>Scooter</option>
                        <option>Cycle</option>
                        <option>Horse</option>
                      </select>
                    </span>
                  </div>
                  <div className="panel-body">
                    <div className="tab-content">

                    </div>
                  </div>
                </div>
              </div>
              <div role="tabpanel" className="tab-pane" id="tab3">
                <div className="panel panel-primary">
                  <div className="panel-heading">
                    <span className="pull-left">

                      <ul className="nav panel-tabs">
                        <li className="active"><a href="#tab1" data-toggle="tab">Begginer</a></li>
                        <li><a href="#tab2" data-toggle="tab">Intermediate</a></li>
                        <li><a href="#tab3" data-toggle="tab">Advance</a></li>
                      </ul>
                    </span>
                    <span className="navbar-form pull-right" role="search">

                      <input className="form-control" placeholder=" search" name="srch-term" id="srch-term" type="text" />
                      <button className="btn btn-default" type="submit" ><i className="glyphicon glyphicon-search"></i></button>
                    </span>

                    <span className="col-sm-2">
                      <div className="btn-group">
                        <button id="dropdown-toggle" type="button" className="form-control btn btn-default dropdown-toggle" data-toggle="dropdown">
                          LEVEL 1 <span className="caret"></span>
                        </button>
                        <ul id="dropdown-menu" className="dropdown-menu" role="menu">
                          <li role="presentation" className="brand-nav active"><a href="#tab31" aria-controls="tab1" role="tab" data-toggle="tab">LEVEL 1</a></li>
                          <li role="presentation" className="brand-nav"><a href="#tab32" aria-controls="tab2" role="tab" data-toggle="tab">LEVEL 2</a></li>
                          <li role="presentation" className="brand-nav"><a href="#tab33" aria-controls="tab3" role="tab" data-toggle="tab">LEVEL 3</a></li>
                        </ul>
                      </div>
                    </span>
                    <span className="col-sm-2">
                      <div className="btn-group">
                        <button id="dropdown-toggle2" type="button" className="form-control btn btn-default dropdown-toggle" data-toggle="dropdown">
                          Macro(max:10min) <span className="caret"></span>
                        </button>
                        <ul id="dropdown-menu2" className="dropdown-menu" role="menu">
                          <li role="presentation" className="brand-nav active"><a href="" aria-controls="tab1" role="tab" data-toggle="tab">Macro(max:10min)</a></li>
                          <li role="presentation" className="brand-nav"><a href="" aria-controls="tab2" role="tab" data-toggle="tab">Micro(max:5min)</a></li>
                          </ul>
                      </div>
                    </span>

                    <span className="col-md-1">
                      <select className="form-control select2">
                        <option>Filter</option>
                        <option>Car</option>
                        <option>Bike</option>
                        <option>Scooter</option>
                        <option>Cycle</option>
                        <option>Horse</option>
                      </select>
                    </span>
                  </div>
                  <div className="panel-body">
                    <div className="tab-content">
                      <div role="tabpanel" className="tab-pane active" id="tab31">

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      );
  }
Scrapdata.propTypes={
  scrapData:PropTypes.func.isRequired,
  videos:PropTypes.object.isRequired,
  errors:PropTypes.object.isRequired
}

const mapStateToProps = state =>({
  videos:state.videos,
  errors:state.errors
});

export default connect(mapStateToProps,{scrapData})(Scrapdata);
