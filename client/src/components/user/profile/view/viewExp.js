import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { deleteExperience } from '../../../../action/profileAction';

class Experience extends Component {
  onDeleteClick(id) {
    this.props.deleteExperience(id);
  }

  render() {
    console.log(this.props);
    let experience = this.props.experience.map(exp => (
      <tr key={exp._id}>
        <td>{exp.company}</td>
        <td>{exp.title}</td>
        <td>
          <Moment format="YYYY">{exp.from}</Moment> -
          {exp.to === null ? (
            ' Now'
          ) : (
            <Moment format="YYYY">{exp.to}</Moment>
          )}
        </td>
        <td>
          <button
            onClick={this.onDeleteClick.bind(this, exp._id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    ));
    let non;
    console.log(experience);
    if(experience.length===0){
       non=(<p className="text-center"> add exp</p>);
    }
    return (
      <div className="blur">
        <h4 className="mb-4 ">Experience Credentials</h4>
        <table className="table">
          <thead>
            <tr>
              <th className="text-center">Company</th>
              <th className="text-center">Title</th>
              <th className="text-center">Years</th>
              <th />
            </tr>
            {experience}
          </thead>
        </table>
        {non}
      </div>
    );
  }
}

Experience.propTypes = {
  deleteExperience: PropTypes.func.isRequired
};

export default connect(null, { deleteExperience })(Experience);
