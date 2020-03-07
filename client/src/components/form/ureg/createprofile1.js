  import React, {Component} from 'react';
  import PropTypes from 'prop-types';
  import {withRouter} from 'react-router-dom';
  //import $ from 'jquery';
  import '../../../../node_modules/popper.js/dist/popper.js';
  import '../../../../node_modules/bootstrap/dist/js/bootstrap.js';

  import classnames from 'classnames';
  import {connect} from 'react-redux';
  import {createProfile} from '../../../action/profileAction';
  const form = {
    marginLeft: '20rem',
    marginTop: '10rem'
  };
  class CreateProfile1 extends Component {
    constructor(props){
      super(props);
      this.state={
        handle:'',
        dob:'',
        mobile:'',
        country:'',
        company:'',
        bio:'',
        errors: {},

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
        handle:this.state.handle,
        dob:this.state.dob,
        mobile:this.state.mobile,
        country:this.state.country,
        company:this.state.company,
        bio:this.state.bio,
        form:'1'
      };
      this.props.createProfile(profileData,this.props.history);
      //this.props.history.push("/job");
    }
    onChange(e){
      this.setState({[e.target.name]:e.target.value})

    }

    render() {
      const { errors } = this.state;
      const {user} =this.props.auth;

      return (<div className="App">

      <div className="col s6">
      <img src="images/Lib.png" id="img" alt="" border="3" height="70" width="70" />
      <h4 className="branding">Liberate</h4>
      </div>

      <div className="container">

      <div  style={form}>
      <section>
      <div class="container">
    <div class="row">
        <div class="col-xs-8">
            <ul class="nav nav-pills nav-justified thumbnail">
                <li><a href="#">
                    <h4 class="list-group-item-heading">Step 1</h4>
                    <p class="list-group-item-text">First step description</p>
                </a></li>
                <li class="active"><a href="#">
                    <h4 class="list-group-item-heading">Step 2</h4>
                    <p class="list-group-item-text">Second step description</p>
                </a></li>
            </ul>
        </div>
	</div>
</div>
      <form onSubmit={this.onSubmit}>

      <div className=" bootstrap snippet blur">

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
      <h4>Address*</h4>
      </label>
      <div className="row">
      <div className="col-md-6">
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
      <h4>company</h4>
      </label>
      <input type="text" className="form-control" name="company" id="company" placeholder="enter your company name." title="" value={this.state.company}
      onChange={this.onChange}/>
      {errors.company &&(<div className="invalid-feedback">{errors.company}</div>)}
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
      <div className="form-group ">
      <div className="col-md-12">
      <hr/>
      <button  type="submit"  className="btn btn-primary btn-lg btn-info-full next-step center">Submit</button>
      </div>
      </div>
      </form>
      </section>
      </div>
      </div>
      </div>);
    }
  }
  CreateProfile1.propTypes={
    profile:PropTypes.object.isRequired,
    errors:PropTypes.string.isRequired,
    auth:PropTypes.object.isRequired
  }
  const mapStateToProps=(state)=>({
    profile:state.profile,
    errors:state.errors,
    auth:state.auth
  })
  export default connect(mapStateToProps,{createProfile})(withRouter(CreateProfile1));
