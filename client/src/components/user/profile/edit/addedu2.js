import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import { Form, Field } from "react-final-form";
import arrayMutators from "final-form-arrays";
import { FieldArray } from "react-final-form-arrays";
//import $ from 'jquery';
import '../../../../../node_modules/popper.js/dist/popper.js';
import '../../../../../node_modules/bootstrap/dist/js/bootstrap.js';

import classnames from 'classnames';
import {connect} from 'react-redux';
import {addEdu} from '../../../../action/profileAction';
import isEmpty from '../../../../validation/is-empty';
const Validator = require('validator');
const form = {
  marginLeft: '20rem',
  marginTop: '10rem'
};
class CreateProfile extends Component {
  constructor(props){
    super(props);
    this.state={
      qualification:'',
      institute:'',
      grade:'',
      from:'',
      to:'',

      skill:'',
      skill_rating:'',
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
      qualification:this.state.qualification,
     institute:this.state.institute,
      grade:this.state.grade,
    from:this.state.from,
      to:this.state.to,
      skill:this.state.skill,
      skill_rating:this.state.skill_rating,
    };

    this.props.addEdu(profileData,this.props.history);

  }
  onChange(e){
    this.setState({[e.target.name]:e.target.value});

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

    <div className=" bootstrap snippet blur">
    <div className="row">
    <div className="col-sm-12">
    <div className="form-group">
    <label >
    <h4>Qualification Education/Technical</h4>
    </label>
<hr/>
    <div className="row">
    <div className="col-md-3">
    <input type="text" name="qualification" id="qualification" className="form-control " placeholder="10th" value={this.state.qualification}
    onChange={this.onChange}/>
    {errors.qualification &&(<div className="invalid-feedback">{errors.qualification}</div>)}

    </div>
    <div className="col-md-3">
    <input type="text" name="institute" id="institute" className="form-control " placeholder="Institute Name"value={this.state.institute}
    onChange={this.onChange}/>
    {errors.institute &&(<div className="invalid-feedback">{errors.institute}</div>)}

    </div>
    <div className="col-md-4">
    <div className="col-md-6">
    <input type="text" name="from" id="from" className="form-control " placeholder="from"value={this.state.from}
    onChange={this.onChange}/>
    {errors.from &&(<div className="invalid-feedback">{errors.from}</div>)}
    </div>
    <div className="col-md-6">
    <input type="text" name="to" id="to" className="form-control " placeholder="to" value={this.state.to}
    onChange={this.onChange} disabled={this.state.disabled? 'disable':''}/>
    {errors.to &&(<div className="invalid-feedback">{errors.to}</div>)}
    </div>
    <div className="form-check">
    <label className="toogle">
    <input type="checkbox" className="toogle" name="current" id="current" value={this.state.current} checked={this.state.current} onChange={this.onCheck}/>
    <span htmlFor="current" className="label-text" >
    Currently
    </span>
    </label>
    </div>
    </div>
    <div className="col-md-2">
    <input type="text" name="grade" id="grade" className="form-control " placeholder="marks/grade"value={this.state.grade}
    onChange={this.onChange}/>
    {errors.grade &&(<div className="invalid-feedback">{errors.grade}</div>)}
    </div>
    </div>
    <hr/>
    </div>
    </div>

    <div className="col-md-12 ">
    <div className="form-group">
    <div className="col-xs-5">
    <label >
    <h4>Add your skills</h4>
    </label>
    <input type="text" className="form-control" name="skill" id="skill" placeholder="add skills"
    value={this.state.skill}
    onChange={this.onChange}/>
    {errors.skill &&(<div className="invalid-feedback">{errors.skill}</div>)}
    </div>
    <div className="col-xs-5">
    <label >
    <h4>Rate your skills</h4>
    </label>
    <input type="text" className="form-control" name="skill_rating" id="skill_rating" placeholder="Rate between 1-10" title="skill_rating."value={this.state.skill_rating}
    onChange={this.onChange}/>
    {errors.skill_rating &&(<div className="invalid-feedback">{errors.skill_rating}</div>)}
    </div>
    </div>
    </div>
    <div className="col-md-12 ">
    <div className="form-group">
    <div className="col-xs-5">
    <label >
    <h4>field of study</h4>
    </label>
    <input type="text" className="form-control" name="fieldstudy" id="fieldstudy" placeholder="filed of study"
    value={this.state.fieldstudy}
    onChange={this.onChange}/>
    {errors.fieldstudy &&(<div className="invalid-feedback">{errors.fieldstudy}</div>)}
    </div>
    <div className="col-xs-5">
    <label >
    <h4>upload certificates (if any)</h4>
    </label>
    <input type="password" className="form-control" name="password2" id="password2" placeholder="certificates" title="enter your password2."/>
    </div>
    </div>
    </div>
    </div>
    </div>
    <div className="form-group ">
    <div className="col-md-12">
    <hr/>
    <button  type="submit" className="btn btn-primary btn-lg btn-info-full next-step center" >update</button>
    </div>
    </div>
    </form>
    </section>
    </div>
    </div>
    </div>);
  }
}
CreateProfile.propTypes={
  addEdu:PropTypes.func.isRequired,
  profile:PropTypes.object.isRequired,
  errors:PropTypes.object.isRequired
}
const mapStateToProps=(state)=>({
  profile:state.profile,
  errors:state.errors
})
export default connect(mapStateToProps,{addEdu})(withRouter(CreateProfile));
