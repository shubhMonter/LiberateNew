import React, { Component } from 'react';
//import { linkedinlogin } from '../../../action/authAction';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { LinkedIn } from '../src';
var url = require('url');


class LinkedInPage extends Component {
  state = {
    code: '',

    errors: {},
  };
  static propTypes ={
      history:'',
      errors: {}
  }
  handleSuccess = (data) => {
    this.setState({
      code: data.code,
      errors: {},
    });
  }
  handleFailure = (error) => {
    console.log(error);
    this.setState({
      code: '',
      errors: error.errorMessage,
    });
  }
render() {
    const { code, errorMessage } = this.state;
    const {history}=this.props;
    console.log(this.state.code);
  //  console.log(window.location.href);
  //  var adr=window.location.href;
  //  var q = url.parse(adr, true);
  //  var qdata = q.query;
//const code1=qdata.code;
console.log(history);
    return (

      <LinkedIn
        clientId="78doih9cnky8bl"
        className="btn-linkedin"
        scope="r_liteprofile r_emailaddress w_member_social"
        onFailure={this.handleFailure}
        onSuccess={this.handleSuccess}
        redirectUri={`${window.location.origin}/login`}
        state="34232423"
        history={history}

      >
      <img src="https://raw.githubusercontent.com/nvh95/react-linkedin-login-oauth2/master/assets/linkedin.png" alt="Log in with Linked In" style={{ maxWidth: '180px' }} />
      </LinkedIn>

    );
  }
}
LinkedInPage.propTypes={
  auth:PropTypes.object.isRequired,
  errors:PropTypes.object.isRequired
}
const mapStateToProps = state =>({
  auth:state.auth,
  errors:state.errors
});

//export default connect(mapStateToProps,{linkedinlogin})(LinkedInPage);
export default connect(mapStateToProps)(LinkedInPage);
