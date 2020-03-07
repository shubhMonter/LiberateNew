import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom'

class Viewedu extends Component {

  render() {

    const education=this.props.education.map(edu=>(
      <tr key={edu._id}>
      <td>{edu.class}</td>
      </tr>
    ));

    return (
      <div>
      <h4>education</h4>
      <table className="edu">
      <thead>
      <tr>
      <th>Company</th>
      <th>title</th>
      <th/>
      </tr>
      <tbody>

      {education}
      </tbody>
      </thead>
      </table>
      </div>

    );
  }
}
export default connect(null)(withRouter (Viewedu));
