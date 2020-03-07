import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoadingOverlay from 'react-loading-overlay'
import BounceLoader from 'react-spinners/BounceLoader'

import classnames from 'classnames';
import {connect} from 'react-redux';
import { loginUser,loading } from '../../../action/authAction';
import LinkedInPage from './linkedinlogin';

const form = {
  marginLeft: '37%',

};
  const form1={marginTop: '20rem'};
const blur ={
	textAlign:'-webkit-auto'
};
class Login extends Component {
  constructor(){
		super();
		this.state={

      email:'',
      password:'',

      errors: {}

		};
    this.onChange=this.onChange.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
	}
  componentDidMount(){
    if(this.props.auth.isAuthenticated){
      this.props.history.push('/dashboard');
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.auth.isAuthenticated){
      this.props.history.push('/dashboard');
    }
		if(nextProps.errors){
			this.setState({errors:nextProps.errors})
		}
	}

onChange(e){
  this.setState({[e.target.name]:e.target.value})
}
onSubmit(e){
  e.preventDefault();
  const userData={

    email:this.state.email,
    password:this.state.password,

  };
  this.props.loginUser(userData);

}

  render() {
      const { errors } = this.state;
      const {history}=this.props;
      const {loading}=this.props.auth;
      let load;
    if(loading===true){
      const isActive=loading;
      load=(<LoadingOverlay
    active={isActive}
    spinner
    text='Loggedin You......'
    style={{position:'unset'}}
    >
    <p></p>
    </LoadingOverlay>);
    }
    return (
  <div className="App">
  {load}
      <div className="container"style={form}>
        <div className="" style={form1}>
            <section>
            <form className=" col-md-6  blur text-center" onSubmit={this.onSubmit} >
                          <div className="form-group">
                            <div className="col-md-12">
                            <label ><h4>Email</h4></label>
                            <input type="text"  className={classnames('form-control',{'is-invalid':errors.email})} name="email" id="email" value={this.state.email} onChange={this.onChange} placeholder="Username or Email ID" />
                              {errors.email &&(<div className="invalid-feedback">{errors.email}</div>)}
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                            <label ><h4>Password</h4></label>
                            <input type="password"  className={classnames('form-control',{'is-invalid':errors.password})} name="password" id="password" value={this.state.password} onChange={this.onChange} placeholder="password" />
                              {errors.password &&(<div className="invalid-feedback">{errors.password}</div>)}
                            </div>
                          </div>
                          <div className="form-group ">
                            <div className="col-md-12 top ">
                          <button  type="submit" className="btn btn-primary btn-info-full next-step" >Login</button>

                          </div>
                          </div>
                          <div className="form-group ">
                            <div className="col-md-12 top ">
                        <LinkedInPage history={history}/>

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
Login.propTypes={
  loginUser:PropTypes.func.isRequired,
  auth:PropTypes.object.isRequired,
  errors:PropTypes.object.isRequired
}

const mapStateToProps = state =>({
  auth:state.auth,
  errors:state.errors
});

export default connect(mapStateToProps,{loginUser})(Login);
