import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoadingOverlay from 'react-loading-overlay'
import { connect } from 'react-redux';
import {getCurrentProfile,deleteAccount} from '../../action/profileAction';
//import Viewexp from './profile/view/viewExp';
//import Viewedu from './profile/view/viewEdu';
class Dashboard extends Component {
  componentDidMount(){
    this.props.getCurrentProfile();

  }
  render() {
    console.log(this.props);
    const { user } = this.props.auth;
    const { profile,loading } = this.props.profile;
    const {errors} =this.props
    let dashboardContent;
    let viewProfile;
    console.log(Object.keys(errors).length);
    if(profile===null&&loading&&Object.keys(errors).length===0){
      const isActive=loading;
      dashboardContent=(<LoadingOverlay
              active={isActive}
              spinner
              text='Loggedin You......'
              style={{position:'unset'}}
              >
    < p></p>
    </LoadingOverlay>);
    }
    else {
      //check if logged user has profile data

      if(profile!==null){

        //<Viewedu education={profile.education}/>
        dashboardContent=(
          <div>
        <h3><a href="/editprofile"className="btn btn-primary btn-lg btn-info-full next-step center" style={{'marginTop':'0%'}} >Edit Profile</a>
        <a href="/addedu"className="btn btn-primary btn-lg btn-info-full next-step center" style={{'marginTop':'0%'}} >Add Education</a>
        <a href="/addexp"className="btn btn-primary btn-lg btn-info-full next-step center" style={{'marginTop':'0%'}} >Add Expeirence</a>
        <a href="/addper"className="btn btn-primary btn-lg btn-info-full next-step center" style={{'marginTop':'0%'}} >Add Personality</a></h3>

        </div>
        );

      }else {
        //user is logged in but no profile
        dashboardContent=(
          <a href="/createprofile" className="btn btn-primary btn-lg btn-info-full next-step center" style={{'marginTop':'0%'}}>create profile</a>
        );
      }
    }
    return (
      <div className="container">
        <div className="row ">
          <div className="col-md-12 text-center">
        <h1> Dashboard</h1>

        {dashboardContent}
        {viewProfile}
        </div>
        </div>
      </div>
    );
  }
}
Dashboard.propTypes={
  getCurrentProfile:PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth:PropTypes.object.isRequired,
  profile:PropTypes.object.isRequired,
  errors:PropTypes.object.isRequired
}

const mapStateToProps = state=>({
  profile:state.profile,
  auth:state.auth,
  errors:state.errors
});
export default connect(mapStateToProps,{getCurrentProfile})(Dashboard);
