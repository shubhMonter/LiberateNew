import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { linkedinLogin,linkedinReg } from '../../../action/authAction';
//import '../assets/index.css';

export class LinkedIn extends Component {
  static propTypes = {
    className: PropTypes.string,
    onFailure: PropTypes.func.isRequired,
    onSuccess: PropTypes.func.isRequired,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    clientId: PropTypes.string.isRequired,
    redirectUri: PropTypes.string.isRequired,
    linkedinLogin:PropTypes.func.isRequired,
    linkedinReg:PropTypes.func.isRequired,
    auth:PropTypes.object.isRequired,
    errors:PropTypes.string.isRequired,
    history:PropTypes.object.isRequired
  }

  componentWillUnmount() {
    window.removeEventListener('message', this.receiveMessage, false);
    if (this.popup && !this.popup.closed) this.popup.close();
  }

  getUrl = () => {
    const {redirectUri, clientId, state, scope} = this.props;
    // TODO: Support IE 11

    const scopeParam = (scope) ? `&scope=${encodeURI(scope)}` : ''
    const linkedInAuthenLink = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}${scopeParam}&state=${state}`;
    return linkedInAuthenLink;

  }

  receiveMessage = (event) => {

    const reqData={
      grant_type:"authorization_code",
      client_id:this.props.clientId,
      client_secret:"f8xv9gIdImoChUWU",
      scope:this.props.scope,
      redirect_uri:this.props.redirectUri,
      code:event.data.code,
    };
    if(this.props.history.location.pathname==='/login'){
    this.props.linkedinLogin(reqData,this.props.history);
  }
  else{
    this.props.linkedinReg(reqData,this.props.history);
  }
    if (event.origin === window.location.origin) {
      console.log('event data:', event.data);
      if (event.data.errorMessage && event.data.from === 'Linked In') {
        this.props.onFailure(event.data);
        this.popup && this.popup.close();
      } else if (event.data.code && event.data.from === 'Linked In') {
        this.props.onSuccess({ code: event.data.code });
        this.popup && this.popup.close();
      }
    }

  };

  handleConnectLinkedInClick = (e) => {
    console.log('handleConnectLinkedInClick');
    if (e) {
      e.preventDefault();
    }

    this.props.onClick && this.props.onClick();
    this.popup = window.open(this.getUrl(), '_blank', 'width=600,height=600');
    window.removeEventListener('message', this.receiveMessage, false);
    window.addEventListener('message', this.receiveMessage, false);

  }


  render() {
    const { className, disabled, children,history } = this.props;
    return (
      <button
        type="button"
        onClick={this.handleConnectLinkedInClick}
        className={className}
        disabled={disabled}
      >
        {children}
      </button>

    );
  }
}

LinkedIn.defaultProps = {
  className: 'btn-linkedin',
  disabled: false,
  children: (<img src="" alt="Log in with Linked In" style={{ maxWidth: '180px' }} />),
  state: 'fdsf78fyds7fm',
};
const mapStateToProps = state =>({
  auth:state.auth,
  errors:state.errors
});

export default connect(mapStateToProps,{linkedinLogin,linkedinReg})(LinkedIn);
//export default connect(mapStateToProps)(LinkedIn);
