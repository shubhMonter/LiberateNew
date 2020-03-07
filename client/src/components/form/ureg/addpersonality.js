import React, {Component} from 'react';

//import $ from 'jquery';
import '../../../../node_modules/popper.js/dist/popper.js';
import '../../../../node_modules/bootstrap/dist/js/bootstrap.js';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateProfile} from '../../../action/profileAction';
import classnames from 'classnames';
const form = {
  marginLeft: '20rem',
  marginTop: '10rem',
  marginRight:'4rem'
};

class AddPer extends Component {
  constructor(props){
    super(props);
    this.state={
      extrovert:"",
      agreeable:"",
    conscientious:"",
      neurotic:"",
      open:"",
      leadership:"",
      moral:"",
      problem_sol:"",
      com_skill:"",
      iq:"",
      errors: {}

    };
    this.onChange=this.onChange.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.errors){
      this.setState({errors:nextProps.errors})

    }
  }

  onSubmit(e){
    e.preventDefault();
    const profileData={
      extrovert:this.state.extrovert,
      agreeable:this.state.agreeable,
      conscientious:this.state.conscientious,
      neurotic:this.state.neurotic,
      open:this.state.open,
      leadership:this.state.leadership,
      moral:this.state.moral,
      problem_sol:this.state.problem_sol,
      com_skill:this.state.com_skill,
      iq:this.state.iq,
      form:4
    };
    this.props.updateProfile(profileData,this.props.history);


  }
  onChange(e){

    this.setState({[e.target.name]:e.target.value})

  }


  render() {
console.log(this.state);
    return (

        <div className="App">
          <link rel="stylesheet" href="/public/style/form/reg.css" />
          <div className="col s6">
            <img src="images/Lib.png" id="img" alt="" border="3" height="70" width="70" />
            <h4 className="branding">Liberate</h4>
          </div>
          <div>
            <div className="" style={form}>
              <section>
                <form onSubmit={this.onSubmit}>
                  <div id="field" className="blur">
                    <div id="field0" className="col-xs-12 " >
                      <h3>What Kind of Person You are:</h3>
                      <hr/>
                      <div className="form-group">
                        <div className="col-xs-6 ">
                          <div className="col-md-12" style={{display:"-webkit-box"}}>
                            <label className="col-md-3" style={{display:"-webkit-box"}}>
                              <h5>Are You Extraversion</h5>
                            </label>
                            <div className="col-md-3" style={{display:"-webkit-box"}}>
                              <div className="form-check">
                                <label>
                                  <input type="radio" name="extrovert" value="yes" onChange={this.onChange} /> <span className="label-text">Yes</span>
                                </label>
                              </div>

                              <div className="form-check">
                                <label>
                                  <input type="radio" name="extrovert"  value="no" onChange={this.onChange}/> <span className="label-text">No</span>
                                </label>
                              </div>
                            </div>
                              <p className="col-md-6"> When a person likes going out all the time and being the center of attention.</p>
                          </div>
                        </div>
                      </div>
                      <hr/>
                      <div className="form-group">
                        <div className="col-xs-6 ">
                          <div className="col-md-12" style={{display:"-webkit-box"}}>
                            <label className="col-md-3" style={{display:"-webkit-box"}}>
                              <h5>Are You Agreeable</h5>
                            </label>
                            <div className="col-md-3" style={{display:"-webkit-box"}}>
                              <div className="form-check">
                                <label>
                                  <input type="radio" name="agreeable" value="yes" onChange={this.onChange}/> <span className="label-text">Yes</span>
                                </label>
                              </div>

                              <div className="form-check">
                                <label>
                                  <input type="radio" name="agreeable" value="No" onChange={this.onChange}/> <span className="label-text">No</span>
                                </label>
                              </div>
                            </div>
                              <p className="col-md-6"> A person with a high level of agreeableness in a personality test is usually warm, friendly, and tactful.
                                They generally have an optimistic view of human nature and get along well with others.</p>
                          </div>
                        </div>
                      </div>

                      <hr/>
                      <div className="form-group">
                        <div className="col-xs-6 ">
                          <div className="col-md-12" style={{display:"-webkit-box"}}>
                            <label className="col-md-3" style={{display:"-webkit-box"}}>
                              <h5>Are You Conscientious</h5>
                            </label>
                            <div className="col-md-3" style={{display:"-webkit-box"}}>
                              <div className="form-check">
                                <label>
                                  <input type="radio" name="conscientious" value="yes" onChange={this.onChange}/> <span className="label-text">Yes</span>
                                </label>
                              </div>

                              <div className="form-check">
                                <label>
                                  <input type="radio" name="conscientious" value="No" onChange={this.onChange}/> <span className="label-text">No</span>
                                </label>
                              </div>
                            </div>
                              <p className="col-md-6">A person scoring high in conscientiousness usually has a high level of self-discipline.
                                These individuals prefer to follow a plan, rather than act spontaneously.</p>
                          </div>
                        </div>
                      </div>


                      <hr/>
                      <div className="form-group">
                        <div className="col-xs-6 ">
                          <div className="col-md-12" style={{display:"-webkit-box"}}>
                            <label className="col-md-3" style={{display:"-webkit-box"}}>
                              <h5>Are You Neurotic</h5>
                            </label>
                            <div className="col-md-3" style={{display:"-webkit-box"}}>
                              <div className="form-check">
                                <label>
                                  <input type="radio" name="neurotic" value="yes" onChange={this.onChange}/> <span className="label-text">Yes</span>
                                </label>
                              </div>

                              <div className="form-check">
                                <label>
                                  <input type="radio" name="neurotic"  value="No" onChange={this.onChange}/> <span className="label-text">No</span>
                                </label>
                              </div>
                            </div>
                              <p className="col-md-6">Neuroticism is a long-term tendency to be in a negative or anxious emotional state. It is not a medical condition but a personality trait.</p>
                          </div>
                        </div>
                      </div>


                      <hr/>
                      <div className="form-group">
                        <div className="col-xs-6 ">
                          <div className="col-md-12" style={{display:"-webkit-box"}}>
                            <label className="col-md-3" style={{display:"-webkit-box"}}>
                              <h5>Are You Open</h5>
                            </label>
                            <div className="col-md-3" style={{display:"-webkit-box"}}>
                              <div className="form-check">
                                <label>
                                  <input type="radio" name="open" value="yes" onChange={this.onChange}/> <span className="label-text">Yes</span>
                                </label>
                              </div>

                              <div className="form-check">
                                <label>
                                  <input type="radio" name="open" value="No" onChange={this.onChange}/> <span className="label-text">No</span>
                                </label>
                              </div>
                            </div>
                              <p className="col-md-6"> A person with a high level of openness to experience in a personality test enjoys trying new things. They are imaginative, curious, and open-minded.</p>
                          </div>
                        </div>
                      </div>
                      <hr/>
                      <div className="form-group">
                        <div className="col-xs-6 ">
                          <div className="col-md-12" style={{display:"-webkit-box"}}>
                            <label className="col-md-4" style={{display:"-webkit-box"}}>
                              <h5>You have Leadership Quality</h5>
                            </label>
                            <div className="col-md-6" style={{display:"-webkit-box"}}>
                              <div className="form-check">
                                <label>
                                  <input type="radio" name="leadership" value="high "onChange={this.onChange}/> <span className="label-text">High</span>
                                </label>
                              </div>

                              <div className="form-check">
                                <label>
                                  <input type="radio" name="leadership" value="Intermediate" onChange={this.onChange}/> <span className="label-text">Intermediate</span>
                                </label>
                              </div>
                              <div className="form-check">
                                <label>
                                  <input type="radio" name="leadership" value="low" onChange={this.onChange}/> <span className="label-text">Low</span>
                                </label>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                      <hr/>
                      <div className="form-group">
                        <div className="col-xs-6 ">
                          <div className="col-md-12" style={{display:"-webkit-box"}}>
                            <label className="col-md-4" style={{display:"-webkit-box"}}>
                              <h5>You have Problem Solving Attitude</h5>
                            </label>
                            <div className="col-md-6" style={{display:"-webkit-box"}}>
                              <div className="form-check">
                                <label>
                                  <input type="radio" name="problem_sol" values="high" onChange={this.onChange} /> <span className="label-text">High</span>
                                </label>
                              </div>

                              <div className="form-check">
                                <label>
                                  <input type="radio" name="problem_sol" value="Intermediate" onChange={this.onChange}/> <span className="label-text">Intermediate</span>
                                </label>
                              </div>
                              <div className="form-check">
                                <label>
                                  <input type="radio" name="problem_sol" value="low" onChange={this.onChange}/> <span className="label-text">Low</span>
                                </label>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                      <hr/>
                      <div className="form-group">
                        <div className="col-xs-6 ">
                          <div className="col-md-12" style={{display:"-webkit-box"}}>
                            <label className="col-md-4" style={{display:"-webkit-box"}}>
                              <h5>Your Communication Skills</h5>
                            </label>
                            <div className="col-md-6" style={{display:"-webkit-box"}}>
                              <div className="form-check">
                                <label>
                                  <input type="radio" name="com_skill" value="high" onChange={this.onChange} /> <span className="label-text">High</span>
                                </label>
                              </div>

                              <div className="form-check">
                                <label>
                                  <input type="radio" name="com_skill" value="Intermediate" onChange={this.onChange}/> <span className="label-text">Intermediate</span>
                                </label>
                              </div>
                              <div className="form-check">
                                <label>
                                  <input type="radio" name="com_skill" value="low" onChange={this.onChange}/> <span className="label-text">Low</span>
                                </label>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                      <hr/>
                      <div className="form-group">
                        <div className="col-xs-6 ">
                          <div className="col-md-12" style={{display:"-webkit-box"}}>
                            <label className="col-md-4" style={{display:"-webkit-box"}}>
                              <h5>Your Moral Values are</h5>
                            </label>
                            <div className="col-md-6" style={{display:"-webkit-box"}}>
                              <div className="form-check">
                                <label>
                                  <input type="radio" name="moral" value="high" onChange={this.onChange} /> <span className="label-text">High</span>
                                </label>
                              </div>

                              <div className="form-check">
                                <label>
                                  <input type="radio" name="moral" value="Intermediate" onChange={this.onChange}/> <span className="label-text">Intermediate</span>
                                </label>
                              </div>
                              <div className="form-check">
                                <label>
                                  <input type="radio" name="moral" value="low" onChange={this.onChange}/> <span className="label-text">Low</span>
                                </label>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                      <hr/>
                      <div className="form-group">
                        <div className="col-xs-6 ">
                          <div className="col-md-12" style={{display:"-webkit-box"}}>
                            <label className="col-md-4" style={{display:"-webkit-box"}}>
                              <h5>what would be your IQ</h5>
                            </label>
                            <div className="col-md-6" style={{display:"-webkit-box"}}>
                              <div className="form-check">
                                <label>
                                  <input type="radio" name="iq" value="below 100" onChange={this.onChange} /> <span className="label-text">below 100</span>
                                </label>
                              </div>

                              <div className="form-check">
                                <label>
                                  <input type="radio" name="iq" value="100-120" onChange={this.onChange}/> <span className="label-text">100-120</span>
                                </label>
                              </div>
                              <div className="form-check">
                                <label>
                                  <input type="radio" name="iq" value="121-150" onChange={this.onChange}/> <span className="label-text">121-150</span>
                                </label>
                              </div>
                              <div className="form-check">
                                <label>
                                  <input type="radio" name="iq" value="151-170" onChange={this.onChange}/> <span className="label-text">151-170</span>
                                </label>
                              </div>
                              <div className="form-check">
                                <label>
                                  <input type="radio" name="iq" value="171-200" onChange={this.onChange}/> <span className="label-text">171-200</span>
                                </label>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div className="form-group ">

                    <div className="col-md-12">
                      <hr/>
                      <a href="/dashboard"   className="btn btn-primary btn-lg btn-info-full next-step center" style={{'marginTop':'0%'}}>Back</a>
                      <button  type="submit"  className="btn btn-primary btn-lg btn-info-full next-step center" style={{'marginTop':'0%'}}>update</button>

                    </div>
                  </div>

                </form>
              </section>
            </div>
          </div>
        </div>

  );
  }
}
AddPer.propTypes={
  profile:PropTypes.object.isRequired,
  errors:PropTypes.object.isRequired,
  auth:PropTypes.object.isRequired
}
const mapStateToProps=(state)=>({
  profile:state.profile,
  errors:state.errors,
  auth:state.auth
})
export default connect(mapStateToProps,{updateProfile})(withRouter(AddPer));
