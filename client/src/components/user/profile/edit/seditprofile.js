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
const center={
  margin:'0 auto'
}
class CreateProfile extends Component {
  constructor(props){
    super(props);
    this.state={
      avatar:'',
      handle:'',
      sector:'',
      category:'',
      domain:'',
      job_role:'',
      skill:'',
      errors: {}
    };
    this.onChange=this.onChange.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
  }

   componentDidMount(){
     this.props.getCurrentProfile();


   }

  componentWillReceiveProps(nextProps){
    if(nextProps.errors){
      this.setState({errors:nextProps.errors})

    }

    if(nextProps.profile.profile){

      const profile = nextProps.profile.profile;
        //brings skilss array to csv
      //if profile field doesnt exit, make empty String
      profile.user.avatar=!isEmpty(profile.user.avatar)?profile.user.avatar:'';
      profile.sector=!isEmpty(profile.sector)?profile.sector:'';
      profile.category=!isEmpty(profile.category)?profile.category:'';
      profile.domain=!isEmpty(profile.domain)?profile.domain:'';
      profile.job_role=!isEmpty(profile.job_role)?profile.job_role:'';
      profile.skill=!isEmpty(profile.skill)?profile.skill:'';
  //set component fields set
          this.setState({
          avatar:profile.user.avatar,
          handle:profile.handle,
          sector:profile.sector,
          category:profile.category,
          domain:profile.domain,
          job_role:profile.job_role,
          skill:profile.skill,

        });
    }
  }

  onSubmit(e){
    e.preventDefault();
    const profileData={
      handle:this.state.handle,
      gender:this.state.gender,
      sector:this.state.sector,
      category:this.state.category,
      domain:this.state.domain,
      job_role:this.state.job_role,
      skill:this.state.skill,

    };
    this.props.createProfile(profileData,this.props.history);

  }
  onChange(e){
    this.setState({[e.target.name]:e.target.value})

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
    <div  style={form}>
    <section>
    <form onSubmit={this.onSubmit}>

    <div className=" bootstrap snippet blur">

    <div className="col-md-12">

    <div className="text-center">
    <img src={this.state.avatar?this.state.avatar:"http://ssl.gstatic.com/accounts/ui/avatar_2x.png"} className="avatar img-circle img-thumbnail" alt="avatar" />
    <h6>Upload a different photo...</h6>
    <input type="file" className="text-center center-block file-upload" />
    </div>
    <h3>Step 1: Personal Details</h3>
    <hr /><br />
    <div className="col-md-12 " >
    <div className="form-group">
    <div className="col-md-8" style={center}>
    <label>
    <h4>username*</h4>
    </label>
    <input type="text" className="form-control" name="handle" id="handle" placeholder="should be unique username"
    value={this.state.handle}
    onChange={this.onChange}/>
    {errors.handle &&(<div className="invalid-feedback">{errors.handle}</div>)}
    </div>
    <div className="col-md-8" style={center}>
    <label>
    <h4>Sector</h4>
    </label>
    <input type="text" className="form-control" name="sector" id="sector" placeholder="add field of study" title="" value={this.state.sector}
    onChange={this.onChange}/>
    {errors.sector &&(<div className="invalid-feedback">{errors.sector}</div>)}
    </div>
    <div className="col-md-8" style={center}>
    <label>
    <h4>Category</h4>
    </label>
    <input type="text" className="form-control" name="category" id="category" placeholder="enter your category." title="" value={this.state.category}
    onChange={this.onChange}/>
    {errors.category &&(<div className="invalid-feedback">{errors.category}</div>)}
    </div>
    <div className="col-md-8" style={center}>
    <label>
    <h4>Domain</h4>
    </label>
    <input type="text" className="form-control" name="domain" id="domain" placeholder="add your domain" title="" value={this.state.domain}
    onChange={this.onChange}/>
    {errors.domain &&(<div className="invalid-feedback">{errors.domain}</div>)}
    </div>
    <div className="col-md-8" style={center}>
    <label>
    <h4>Job Role</h4>
    </label>
    <input type="text" className="form-control" name="job_role" id="job_role" placeholder="add your job role" title="" value={this.state.job_role}
    onChange={this.onChange}/>
    {errors.job_role &&(<div className="invalid-feedback">{errors.job_role}</div>)}
    </div>
    <div className="col-md-8" style={center}>
    <label>
    <h4>Skills</h4>
    </label>
    <input type="text" className="form-control" name="skill" id="skill" placeholder="add your skills" title="" value={this.state.skill}
    onChange={this.onChange}/>
    {errors.skill &&(<div className="invalid-feedback">{errors.skill}</div>)}
    </div>
    </div>
    </div>
    </div>
    </div>


    <div className="form-group ">
    <div className="col-md-12">
    <hr/>
    <a href="/dashboard" className="btn btn-primary btn-lg btn-info-full next-step center" style={{'marginTop':'0%'}} >Back</a>
    <button  type="submit" className="btn btn-primary btn-lg btn-info-full next-step center" >Update</button>
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
CreateProfile.propTypes={
  createProfile:PropTypes.func.isRequired,
  getCurrentProfile:PropTypes.func.isRequired,
  profile:PropTypes.object.isRequired,
  errors:PropTypes.object.isRequired
}
const mapStateToProps=(state)=>({
  profile:state.profile,
  errors:state.errors
})
export default connect(mapStateToProps,{createProfile,getCurrentProfile})(withRouter(CreateProfile));
