import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';
import { connect} from 'react-redux';
import { logoutUser } from '../action/authAction';
import { clearCurrentProfile} from '../action/profileAction';



 class Nav extends Component {
   onLogoutClick(e){
     e.preventDefault();
     this.props.clearCurrentProfile();
     this.props.logoutUser();
   }
  render() {
    const {isAuthenticated,user}=this.props.auth;

    const authLinks=(
      <div>
        <a className="dropdown-btn"> <img className="img2" src={user.avatar?user.avatar:'/profile.png'} id="img1" alt="user.name" border="3" height="230" width="230"/>

        </a>
        <div className="dropdown-container">


        </div>
          <a href="#" onClick={this.onLogoutClick.bind(this)}><i className="fas fa-sign-out-alt">User logout</i></a>
        <a href="/dashboard" className="top"><i className="fas fa-desktop">Dashboard</i></a>
        <a href="#services" className="top" disabled><i className="fas fa-users-class">Class Rooms</i></a>

        <hr className="hr"/>
        <a href="/scrap" className="top"><i className="fas fa-cogs">Technical</i></a>
        <a href="" className="top" ><i className="fas fa-user-cog">PersonalGrowth</i></a>
        </div>

    );
    const guestlinks=(
      <div>
        <a className="dropdown-btn"> <img className="img2" src='/profile.png' id="img1" alt="" border="3" height="230" width="230"/>
          <div className=" overlay"> Login To Control Panel</div>
        </a>
        <div className="dropdown-container">

        </div>
        <a href="/login"><i className="fas fa-user-circle">User login</i></a>
            <a href="/" className="top">Registration</a>
        </div>


    );
    return ( <div className="App">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
    <div className="sidenav">
      {isAuthenticated?authLinks:guestlinks}







      <div><a href="/"> <img src= '/Lib.png' id="img" className="home" alt="" border="3" height="230" width="230" /></a>
      </div>
    </div>

    </div>);

    }
  }
  Nav.propTypes={
    logoutUser:PropTypes.func.isRequired,
    auth:PropTypes.object.isRequired
  }
  const mapStateToProps= state =>({
    auth:state.auth
  })
export default connect(mapStateToProps,{logoutUser,clearCurrentProfile})(Nav);
