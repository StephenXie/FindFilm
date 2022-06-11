import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPreferences, deletePreference } from '../../actions/preferences';

export class Preferences extends Component {
  static propTypes = {
    preferences: PropTypes.array.isRequired,
    getPreferences: PropTypes.func.isRequired,
    deletePreference: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getPreferences();
  }

  render() {
    return (
      <Fragment>
        <h2>Preferences</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.preferences.map((preference) => (
              <tr key={preference.id}>
                <td>{preference.id}</td>
                <td>{preference.name}</td>
                <td>{preference.email}</td>
                <td>{preference.message}</td>
                <td>
                  <button
                    onClick={this.props.deletePreference.bind(this, preference.id)}
                    className="btn btn-danger btn-sm"
                  >
                    {' '}
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  preferences: state.preferences.preferences,
});

export default connect(mapStateToProps, { getPreferences, deletePreference })(Preferences);
