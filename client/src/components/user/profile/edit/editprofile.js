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
      avatar:'',
      handle:'',
      gender:'',
      dob:'',
      age:'',
      mobile:'',
      street: '',
      postcode: '',
      city:'',
      country:'',
      languages:'',
      martial_status:'',
      hobbies:'',
      fieldstudy:'',
      bio:'',
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
      profile.mobile=!isEmpty(profile.mobile)?profile.mobile:'';
      profile.address=!isEmpty(profile.address)?profile.address:{};
      profile.street=!isEmpty(profile.address.street)?profile.address.street:{};
      profile.postcode=!isEmpty(profile.address.postcode)?profile.address.postcode:{};
      profile.city=!isEmpty(profile.address.city)?profile.address.city:{};
      profile.country=!isEmpty(profile.address.country)?profile.address.country:{};
      profile.languages=!isEmpty(profile.languages)?profile.languages:{};
      profile.dob=!isEmpty(profile.dob)?profile.dob:'';
      profile.hobbies=!isEmpty(profile.hobbies)?profile.hobbies:{};
      profile.martial_status=!isEmpty(profile.martial_status)?profile.martial_status:'';
  //set component fields set
          this.setState({
          avatar:profile.user.avatar,
          handle:profile.handle,
          gender:profile.gender,
          dob:profile.dob,
          age:profile.age,
          mobile:profile.mobile,
          street: profile.address.street,
          postcode: profile.address.postcode,
          city:profile.address.city,
          country:profile.address.country,
          languages:profile.languages,
          martial_status:profile.martial_status,
          hobbies:profile.hobbies,
          fieldstudy:profile.fieldstudy,
          bio:profile.bio,
        });
    }
  }

  onSubmit(e){
    e.preventDefault();
    const profileData={
      handle:this.state.handle,
      gender:this.state.gender,
      dob:this.state.dob,
      age:this.state.age,
      mobile:this.state.mobile,
        street: this.state.street,
        postcode: this.state.postcode,
        city:this.state.city,
        country:this.state.country,
      languages:this.state.languages,
      martial_status:this.state.martial_status,
      hobbies:this.state.hobbies,
      fieldstudy:this.state.fieldstudy,
      bio:this.state.bio,
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
    <div className="row" style={form}>
    <section>
    <form onSubmit={this.onSubmit}>

    <div className=" bootstrap snippet blur">
    <div className="row">
    <div className="col-sm-12">

    <div className="text-center">
    <img src={this.state.avatar?this.state.avatar:"http://ssl.gstatic.com/accounts/ui/avatar_2x.png"} className="avatar img-circle img-thumbnail" alt="avatar" />
    <h6>Upload a different photo...</h6>
    <input type="file" className="text-center center-block file-upload" />
    </div>
    <h3>Step 1: Personal Details</h3>
    <hr /><br />

    <div className="col-sm-9 " style={{marginLeft: "15%"}}>
    <div className="form-group">
    <div className="col-xs-6">
    <label>
    <h4>username*</h4>
    </label>
    <input type="text" className="form-control" name="handle" id="handle" placeholder="should be unique username"
    value={this.state.handle}
    onChange={this.onChange}/>
    {errors.handle &&(<div className="invalid-feedback">{errors.handle}</div>)}
    </div>
    </div>
    <div className="form-group">
    <div className="col-xs-6">
    <label>
    <h4>Gender</h4>
    </label>
    <select id="gender"  name="gender" className="form-control" value={this.state.gender}
    onChange={this.onChange}>
    <option name='Male' value='0'>Male</option>
    <option name='Female' value="1">Female</option>
    </select>
    </div>
    </div>
    <div className="form-group">
    <div className="col-xs-6">
    <label>
    <h4>Martial Status</h4>
    </label>
    <select id="martial_status" name="martial_status" className="form-control" value={this.state.martial_status}
    onChange={this.onChange}>
    <option name='Single' value="0">single</option>
    <option name='Married' value="1">married</option>
    </select>
    </div>
    </div>
    <div className="form-group">
    <div className="col-xs-6">
    <label>
    <h4>Date of Birth</h4>
    </label>
    <input type="text" className="form-control" name="dob" id="dob" placeholder="dd/mm/yyyy"
    value={this.state.dob}
    onChange={this.onChange}/>
    {errors.dob &&(<div className="invalid-feedback">{errors.dob}</div>)}
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
    <h4>Languages*</h4>
    </label>
    <input type="text" className="form-control" name="languages" id="languages" placeholder="add languages you know"
    value={this.state.languages}
    onChange={this.onChange}/>
    {errors.languages &&(<div className="invalid-feedback">{errors.languages}</div>)}
    </div>
    </div>

    <div className="form-group">
    <div className="col-xs-12">
    <label>
    <h4>Address*</h4>
    </label>
    <div className="row">
    <div className="col-md-3">
    <input type="text" name="street" id="street" className="form-control " placeholder="street name" value={this.state.street}
    onChange={this.onChange}/>
    {errors.street &&(<div className="invalid-feedback">{errors.street}</div>)}

    </div>
    <div className="col-md-3">
    <input type="text" name="postcode" id="postcode" className="form-control " placeholder="Post Code"value={this.state.postcode}
    onChange={this.onChange}/>
    {errors.postcode &&(<div className="invalid-feedback">{errors.postcode}</div>)}

    </div>
    <div className="col-md-3">
    <input type="text" name="city" id="city" className="form-control " placeholder="city"value={this.state.city}
    onChange={this.onChange}/>
    {errors.city &&(<div className="invalid-feedback">{errors.city}</div>)}

    </div>
    <div className="col-md-3">
    <input type="text" name="country" id="country" className="form-control " placeholder="country"value={this.state.country}
    onChange={this.onChange}/>
    {errors.country &&(<div className="invalid-feedback">{errors.country}</div>)}

    </div>
    </div>
    </div>
    </div>

      <div className="form-group">
    <div className="col-xs-6">
    <label>
    <h4>Field of Study</h4>
    </label>
    <input type="text" className="form-control" name="fieldstudy" id="fieldstudy" placeholder="add field of study" title="" value={this.state.fieldstudy}
    onChange={this.onChange}/>
    {errors.fieldstudy &&(<div className="invalid-feedback">{errors.fieldstudy}</div>)}
    </div>
    <div className="col-xs-6">
    <label>
    <h4>Hobbies</h4>
    </label>
    <input type="text" className="form-control" name="hobbies" id="hobbies" placeholder="enter your hobbies." title="" value={this.state.hobbies}
    onChange={this.onChange}/>
    {errors.hobbies &&(<div className="invalid-feedback">{errors.hobbies}</div>)}
    </div>
    <div className="col-xs-12">
    <label>
    <h4>Short Bio</h4>
    </label>
    <input type="text" className="form-control" name="bio" id="bio" placeholder="add your short bio" title="" value={this.state.bio}
    onChange={this.onChange}/>
    {errors.bio &&(<div className="invalid-feedback">{errors.bio}</div>)}
    </div>
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
    </div>);
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
