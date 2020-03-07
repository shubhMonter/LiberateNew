
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import LoadingOverlay from 'react-loading-overlay'
import BounceLoader from 'react-spinners/BounceLoader'
//import $ from 'jquery';
import '../../../../node_modules/popper.js/dist/popper.js';
import '../../../../node_modules/bootstrap/dist/js/bootstrap.js';

import classnames from 'classnames';
 import {connect} from 'react-redux';
 import {registerUser,loading} from '../../../action/authAction';
 import LinkedInPage from './linkedinlogin';
const form = {
	marginLeft: '20rem',
	marginTop: '10rem'
};
//const blur ={
//	textAlign:'-webkit-auto'
//};
 class Reg extends Component {
	constructor(){
		super();
		this.state={
			name:'',
      email:'',
      password:'',
      password2:'',
      errors: {},

		};
    this.onChange=this.onChange.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
	}
	componentDidMount(){
		if(this.props.auth.isAuthenticated){
			this.props.history.push('/dashboard');
		}
    console.log(this.props.auth.loading);
	}
	componentWillReceiveProps(nextProps){
		if(nextProps.errors){
			this.setState({errors:nextProps.errors})
		}
	}

onChange(e){
  this.setState({[e.target.name]:e.target.value})

}
onSubmit(e){
  e.preventDefault();
  const newUser={
    name:this.state.name,
    email:this.state.email,
    password:this.state.password,
    password2:this.state.password2
  };
	this.props.registerUser(newUser,this.props.history);
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
  text='Data Loading.......'
  >
</LoadingOverlay>);
  }
		return (
      <div className="App">
          {load}

			<div className="col s6">

			<h4 className="branding"><img src="/Lib.png" id="img" alt="" border="3" height="70" width="70"/>Liberate</h4>
			</div>
<div className="container">
		<div className="" style={form}>
			<section>
							<form onSubmit={this.onSubmit}>

								<div className="col-xs-12 col-sm-8 col-sm-offset-2 col-md-offset-4 blur">
                <div className="form-group">
                  <div className="col-xs">
                    <label >
                      <h4>Name</h4>
                    </label>
                    <input type="text" className={classnames('form-control',{'is-invalid':errors.name})} name="name" id="name" value={this.state.name} onChange={this.onChange} placeholder="name" />
                    {errors.name &&(<div className="invalid-feedback">{errors.name}</div>)}
                  </div>
                </div>
									<div className="form-group">
										<div className="col-xs">
											<label >
												<h4>Email</h4>
											</label>
											<input type="text" className={classnames('form-control',{'is-invalid':errors.email})} name="email" value={this.state.email} onChange={this.onChange} id="email" placeholder="Email" />
                        {errors.email &&(<div className="invalid-feedback">{errors.email}</div>)}
                    </div>
									</div>
									<div className="form-group">
										<div className="col-xs">
											<label >
												<h4>Password</h4>
											</label>
											<input type="password" className={classnames('form-control',{'is-invalid':errors.password})} name="password" value={this.state.password} onChange={this.onChange} id="password" placeholder="password" />
                        {errors.password &&(<div className="invalid-feedback">{errors.password}</div>)}
                    </div>
									</div>
									<div className="form-group">
										<div className="col-xs top">
											<label >
												<h4>Confirm Password</h4>
											</label>
											<input type="password" className={classnames('form-control',{'is-invalid':errors.password2})} name="password2" value={this.state.password2} onChange={this.onChange} id="password2" placeholder="Confirm Password" />
                        {errors.password2 &&(<div className="invalid-feedback">{errors.password2}</div>)}
                    </div>
									</div>

									<div className="form-group ">
										<div className="col-xs top ">
											<button type="submit" className="btn btn-primary btn-info-full next-step" href="#">Register & continue</button>
										</div>
									</div>
								</div>
							</form>
			</section>

      <LinkedInPage history={history}/>

		</div>
	</div>
	</div>);
	}
}
Reg.propTypes={
	registerUser:PropTypes.func.isRequired,
	auth:PropTypes.object.isRequired,
	errors:PropTypes.object.isRequired
}
const mapStateToProps=(state)=>({
	auth:state.auth,
	errors:state.errors
})
export default connect(mapStateToProps,{registerUser})(withRouter(Reg));
