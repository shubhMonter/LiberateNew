import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
//import $ from 'jquery';
import '../../../../../node_modules/popper.js/dist/popper.js';
import '../../../../../node_modules/bootstrap/dist/js/bootstrap.js';

import classnames from 'classnames';
import {connect} from 'react-redux';
import {createProfile,getCurrentProfile} from '../../../../action/profileAction';
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
      errors: {}

    };
    this.onChange=this.onChange.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
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
    this.props.createProfile(profileData,this.props.history);

  }
  onChange(e){
    this.setState({[e.target.name]:e.target.value})

  }

  render() {

    const { errors } = this.state;
    const {education} = this.state;
    return (<div className="App">
    <link rel="stylesheet" href="/public/style/form/reg.css" />
    <div className="col s6">
    <img src="images/Lib.png" id="img" alt="" border="3" height="70" width="70" />
    <h4 className="branding">Liberate</h4>
    </div>
    <div className="container">
    <div className="row" style={form}>
    <section>
    <form onSubmit={this.onSubmit}>

    <div className=" bootstrap snippet blur">
    <div className="row">
    <div className="col-sm-12">

    <div className="text-center">
    <img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png" className="avatar img-circle img-thumbnail" alt="avatar" />
    <h6>Upload a different photo...</h6>
    <input type="file" className="text-center center-block file-upload" />
    </div>
    <h3>Step 1: Personal Details</h3>
    <hr /><br />

    <div className="col-sm-9 " style={{marginLeft: "15%"}}>
    <div className="form-group">
    <div className="col-xs-6">
    <label>
    <h4>Gender</h4>
    </label>
    <select id="input_sex" className="form-control" value={this.state.gender}
    onChange={this.onChange}>
    <option name='Male' value="Male">Male</option>
    <option name='Female' value="Female">Female</option>
    </select>
    </div>
    </div>
    <div className="form-group">
    <div className="col-xs-6">
    <label>
    <h4>username*</h4>
    </label>
    <input type="text" className="form-control" name="handle" id="handle" placeholder="enter mobile number"
    value={this.state.handle}
    onChange={this.onChange}/>
    {errors.handle &&(<div className="invalid-feedback">{errors.handle}</div>)}
    </div>
    </div>

    <div className="form-group">
    <div className="col-xs-6">
    <label>
    <h4>Mobile*</h4>
    </label>
    <input type="text" className="form-control" name="mobile" id="mobile" placeholder="enter mobile number"
    value={this.state.mobile}
    onChange={this.onChange}/>
    {errors.mobile &&(<div className="invalid-feedback">{errors.mobile}</div>)}
    </div>
    </div>

    <div className="form-group">
    <div className="col-xs-6">
    <label>
    <h4>Location*</h4>
    </label>
    <input type="text" className="form-control" id="location" name="location" placeholder="somewhere"
    value={this.state.location}
    onChange={this.onChange}/>
    {errors.location &&(<div className="invalid-feedback">{errors.location}</div>)}
    </div>
    </div>

    <div className="form-group">
    <div className="col-xs-6">
    <label>
    <h4>Languages*</h4>
    </label>
    <input type="text" className="form-control" name="languages" id="languages" placeholder="add languages you know"
    value={this.state.languages}
    onChange={this.onChange}/>
    {errors.languages &&(<div className="invalid-feedback">{errors.languages}</div>)}
    </div>
    <div className="col-xs-6">
    <label>
    <h4>Honors and Awards</h4>
    </label>
    <input type="password" className="form-control" name="password2" id="password2" placeholder="upload certificates" title="enter your password2." />
    </div>
    <div className="col-xs-6">
    <label>
    <h4>Projects</h4>
    </label>
    <input type="password" className="form-control" name="password2" id="password2" placeholder="add link of project" title="enter your password2." />
    </div>
    <div className="col-xs-6">
    <label>
    <h4>Publication</h4>
    </label>
    <input type="password" className="form-control" name="password2" id="password2" placeholder="links of published documents" title="enter your password2." />
    </div>
    <div className="col-xs-6">
    <label>
    <h4>Patents</h4>
    </label>
    <input type="password" className="form-control" name="password2" id="password2" placeholder="patent Number" title="enter your password2." />
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    <h3>Step 2:Job Details</h3>
    <hr />
    <div id="field">
    <div id="field0" className="col-xs-12 blur" >
    <div className="col-xs-6 col-sm-6 col-md-6 ">
    <div className="form-group">
    <label >
    <h4>Company name*</h4>
    </label>
    <input type="text" name="comp_name" id="comp_name" className="form-control input-sm" placeholder="Company Name"
    value={this.state.comp_name}
    onChange={this.onChange}/>
    {errors.comp_name &&(<div className="invalid-feedback">{errors.comp_name}</div>)}
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
    <input type="text" className="form-control" name="job_desc" id="job_desc" placeholder="Describe your work"
    value={this.state.job_desc}
    onChange={this.onChange}/>
    {errors.job_desc &&(<div className="invalid-feedback">{errors.job_desc}</div>)}

    </div>
    </div>
    <div className="form-group">
    <div className="col-xs-6">
    <label >
    <h4>Company Project</h4>
    </label>
    <input type="text" className="form-control" name="email" id="email" placeholder="add your project you are working on" title="enter your email."/>
    </div>
    </div>
    <div className="form-group">
    <div className="col-xs-6">
    <label >
    <h4>from</h4>
    </label>
    <input type="password" className="form-control" name="password2" id="password2" placeholder="Join Date" title="enter your password2."/>
    </div>
    </div>
    <div className="form-group">
    <div className="col-xs-6">
    <label >
    <h4>to</h4>
    </label>
    <input type="password" className="form-control" name="password2" id="password2" placeholder="Leave Date" title="enter your password2."/>
    </div>
    </div>
    <hr/>
    <div className="btn-group" data-toggle="buttons">
    <label className="btn btn-success active" style={{width: '37px'}}>
    <div className="checkBoxAllow fas fa-check"></div>
    <div className="nonCheckBoxAllow fas fa-times"></div>
    </label>
    </div>
    Currently working
    </div>
    </div>
    <h3>Step 3:Skills</h3>
    <hr/>
    <div id="field">
    <div id="field0" className="col-xs-12 blur" >
    <div className=" col-md-12 ">

    <div className="form-group">
    <label >
    <h4>Education</h4>
    </label>
<div className="edu">
{this.state.education.map(function(ed,index){
 return(

    <div className="row">
    <div className="col-md-3">
    <input type="text" name={`education[${index}].class`} id={`education[${index}].class`} className="form-control " placeholder="10th" value={education[index].class}/>
    {errors.class &&(<div className="invalid-feedback">{errors.class}</div>)}
    </div>
    <div className="col-md-3">
    <input type="text" name={`education[${index}].institute`} id={`education[${index}].institute`} className="form-control " placeholder="Institute Name" value={education[index].institute}/>
    </div>
    <div className="col-md-3">
    <input type="text" name={`education[${index}].grade`} id={`education[${index}].grade`} className="form-control " placeholder="marks/grade" value={education[index].grade}/>
    </div>
    <div className="col-md-3">
    <input type="text" name={`education[${index}].year`} id={`education[${index}].year`} className="form-control " placeholder="year" value={education[index].year}/>
    </div>
    </div>
 )
}
)
}
</div>
<hr/>
    <div className="row">
    <div className="col-md-3">
    <input type="text" name="class" id="class" className="form-control " placeholder="10th" value={this.state.class}
    onChange={this.onChange}/>
    {errors.class &&(<div className="invalid-feedback">{errors.class}</div>)}

    </div>
    <div className="col-md-3">
    <input type="text" name="institute" id="institute" className="form-control " placeholder="Institute Name"value={this.state.institute}
    onChange={this.onChange}/>
    {errors.institute &&(<div className="invalid-feedback">{errors.institute}</div>)}

    </div>
    <div className="col-md-3">
    <input type="text" name="grade" id="grade" className="form-control " placeholder="marks/grade"value={this.state.grade}
    onChange={this.onChange}/>
    {errors.grade &&(<div className="invalid-feedback">{errors.grade}</div>)}

    </div>
    <div className="col-md-3">
    <input type="text" name="year" id="year" className="form-control " placeholder="year"value={this.state.year}
    onChange={this.onChange}/>
    {errors.year &&(<div className="invalid-feedback">{errors.year}</div>)}

    </div>
    </div>
    <hr/>
    </div>
    </div>
    <div className="col-md-12 ">
    <div className="form-group">
    <div className="col-xs-6">
    <label >
    <h4>field of study</h4>
    </label>
    <input type="text" className="form-control" name="fieldstudy" id="fieldstudy" placeholder="filed of study"
    value={this.state.fieldstudy}
    onChange={this.onChange}/>
    {errors.fieldstudy &&(<div className="invalid-feedback">{errors.fieldstudy}</div>)}
    </div>
    <div className="col-xs-6">
    <label >
    <h4>Add your skills</h4>
    </label>
    <input type="text" className="form-control" name="skillset" id="skillset" placeholder="add skills"
    value={this.state.skillset}
    onChange={this.onChange}/>
    {errors.skillset &&(<div className="invalid-feedback">{errors.skillset}</div>)}
    </div>
    </div>
    </div>
    <div className="col-md-12 ">
    <div className="form-group">

    <div className="col-xs-6">
    <label >
    <h4>Rate your skills</h4>
    </label>
    <input type="text" className="form-control" name="email" id="email" placeholder="Rate between 1-10" title="enter your email."/>
    </div>
    <div className="col-xs-6">
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
  createProfile:PropTypes.func.isRequired,
  getCurrentProfile:PropTypes.func.isRequired,
  profile:PropTypes.object.isRequired,
  education:PropTypes.object.isRequired,
  errors:PropTypes.object.isRequired
}
const mapStateToProps=(state)=>({
  profile:state.profile,
  education:state.profile.education,
  errors:state.errors
})
export default connect(mapStateToProps,{createProfile,getCurrentProfile})(withRouter(CreateProfile));
