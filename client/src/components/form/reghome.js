import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
const form = {
  marginLeft: '20rem',
  marginTop: '20rem'
};
class Reghome extends Component {

  componentDidMount(){
    if(this.props.auth.isAuthenticated){
      this.props.history.push('/dashboard');
    }
  }
  render() {
    return (
  <div className="App">
      <div className="container">
        <div className=" " style={form}>
            <section>
              <div className="wizard">
                <div className="  col-md-12  blur">
                  <a href="/register/creg">
                    <figure className="snip0016 text-center">
                      <img src="http://cdn.onlinewebfonts.com/svg/img_355172.png" width="70" alt="sample41"  className="img-thumb " />
                      <figcaption>
                      <h2>Company Registration</h2>
                      </figcaption>
                    </figure>
                    </a>
                </div>
                <div className=" com-md-12   blur">
                  <a href="/register/reg">
                    <figure className="snip0016 text-center">
                      <img src="http://cdn.onlinewebfonts.com/svg/img_335918.png" width="70" alt="sample41" className="img-thumb" />
                        <figcaption>
                        <h2>Employee Registration</h2>
                        </figcaption>
                      </figure>
                    </a>
                  </div>
                </div>
            </section>
          </div>
      </div>
  </div>
    );
  }
}
Reghome.propTypes={
  auth:PropTypes.object.isRequired,
  errors:PropTypes.object.isRequired
}

const mapStateToProps = state =>({
  auth:state.auth,
  errors:state.errors
});


export default connect(mapStateToProps)(Reghome);
