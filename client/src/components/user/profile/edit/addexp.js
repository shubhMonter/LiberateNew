import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {withRouter} from 'react-router-dom';
//import $ from 'jquery';
import '../../../../../node_modules/popper.js/dist/popper.js';
import '../../../../../node_modules/bootstrap/dist/js/bootstrap.js';

import classnames from 'classnames';
import {connect} from 'react-redux';
import {addExp} from '../../../../action/profileAction';
import isEmpty from '../../../../validation/is-empty';
const Validator = require('validator');
const form = {
  marginLeft: '20rem',
  marginTop: '10rem'
};
class AddExp extends Component {
  constructor(props){
    super(props);
    this.state={
      company:'',
      title:'',
      description:'',
      location:'',
      from:'',
      to:'',
      current:false,
      disable:false,
      errors: {}

    };
    this.onChange=this.onChange.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
    this.onCheck=this.onCheck.bind(this);
  }
  onSubmit(e){
    e.preventDefault();
    const profileData={

      location:this.state.location,
      languages:this.state.languages,
      company:this.state.company,
      title:this.state.title,
      description:this.state.description,
      from: this.state.from,
      to: this.state.to,
      current: this.state.current,
    };
    this.props.addExp(profileData,this.props.history);

  }
  onChange(e){
    this.setState({[e.target.name]:e.target.value})

  }
  onCheck(e){
    this.setState({
      disabled:!this.state.disable,
      current:!this.state.current
    })
  }

  render() {

    const { errors } = this.state;
    return (<div className="App">
    <link rel="stylesheet" href="/public/style/form/reg.css" />
    <div className="col s6">
    <img src="images/Lib.png" id="img" alt="" border="3" height="70" width="70" />
    <h4 className="branding">Liberate</h4>
    </div>
    <div className="container">
    <div className="" style={form}>
    <h3><a href="/editprofile"className="btn btn-primary btn-lg btn-info-full next-step center" style={{'marginTop':'0%'}} >Edit Profile</a>
    <a href="/addedu"className="btn btn-primary btn-lg btn-info-full next-step center" style={{'marginTop':'0%'}} >Add Education</a>
    <a href="/addexp"className="btn btn-primary btn-lg btn-info-full next-step center" style={{'marginTop':'0%'}} >Add Expeirence</a>
    <a href="/addper"className="btn btn-primary btn-lg btn-info-full next-step center" style={{'marginTop':'0%'}} >Add Personality</a></h3>
    <section>
    <form onSubmit={this.onSubmit}>

    <div id="field">
    <div id="field0" className="col-xs-12 blur" >
    <h3>Add Experience</h3>
    <hr />

    <div className="form-group">
    <div className="col-xs-6 ">
    <label >
    <h4>Company name*</h4>
    </label>
    <input type="text" name="company" id="company" className="form-control input-sm" placeholder="Company Name"
    value={this.state.company}
    onChange={this.onChange}/>
    {errors.company &&(<div className="invalid-feedback">{errors.company}</div>)}
    </div>
    </div>
    <div className="form-group">
    <div className="col-xs-6">
    <label >
    <h4>Title*</h4>
    </label>
    <input type="text" className="form-control" name="title" id="title" placeholder="Job Profiles" title="enter your email."
    value={this.state.title}
    onChange={this.onChange}/>
    {errors.title &&(<div className="invalid-feedback">{errors.title}</div>)}

    </div>
    </div>
    <div className="form-group">
    <div className="col-xs-6">
    <label >
    <h4>Job Description*</h4>
    </label>
    <input type="text" className="form-control" name="description" id="description" placeholder="Describe your work"
    value={this.state.description}
    onChange={this.onChange}/>
    {errors.description &&(<div className="invalid-feedback">{errors.description}</div>)}

    </div>
    </div>
    <div className="form-group">
    <div className="col-xs-6">
    <label >
    <h4>location</h4>
    </label>
    <input type="text" className="form-control" name="location" id="location" placeholder="address" title="address"
    value={this.state.location}
    onChange={this.onChange}/>
    {errors.location &&(<div className="invalid-feedback">{errors.location}</div>)}
    </div>
    </div>
    <div className="form-group">
    <div className="col-xs-6">
    <label >
    <h4>from</h4>
    </label>
    <input type="text" className="form-control" name="from" id="from" placeholder="Joining Date" title="enter Joining Date"
    value={this.state.from}
    onChange={this.onChange}/>
    {errors.from &&(<div className="invalid-feedback">{errors.from}</div>)}
    </div>
    </div>
    <div className="form-group">
    <div className="col-xs-6">
    <label >
    <h4>to</h4>
    </label>
    <input type="text" className="form-control" name="to" id="to" placeholder="Leave Date" title="enter Leave Date."
    value={this.state.to}
    onChange={this.onChange}
    disabled={this.state.disabled? 'disable':''}/>
    {errors.to &&(<div className="invalid-feedback">{errors.to}</div>)}
    </div>
    </div>
    <div className="form-check">
    <input type="checkbox" className="form-check-input" name="current" id="current" value={this.state.current} checked={this.state.current} onChange={this.onCheck}/>
    <label htmlFor="current" className="form-check-label" >
    Currently working
    </label>
    </div>

    </div>
    </div>


    <div className="form-group ">

    <div className="col-md-12">
    <hr/>
    <a href="/dashboard"   className="btn btn-primary btn-lg btn-info-full next-step center" style={{'marginTop':'0%'}}>Back</a>
    <button  type="submit" className="btn btn-primary btn-lg btn-info-full next-step center" >update</button>

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
AddExp.propTypes={
  addExp:PropTypes.func.isRequired,
  profile:PropTypes.object.isRequired,
  errors:PropTypes.object.isRequired
}
const mapStateToProps=(state)=>({
  profile:state.profile,
  errors:state.errors
})
export default connect(mapStateToProps,{addExp})(withRouter(AddExp));
