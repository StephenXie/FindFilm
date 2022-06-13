import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPreferences, deletePreference } from '../../actions/preferences';
import movieLookup from '../../../static/frontend/movieLookup.json';

export class Preferences extends Component {
  static propTypes = {
    preferences: PropTypes.array.isRequired,
    getPreferences: PropTypes.func.isRequired,
    deletePreference: PropTypes.func.isRequired,
  };
  componentDidMount() {
    this.props.getPreferences();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.didChange !== this.props.didChange) {
    this.props.getPreferences();
    // new props 
    }
  }
  state = {
    movieLookup: movieLookup,
  };
  render() {
    // console.log(this.state.movieLookup)
    return (
      <Fragment>
        <h2>Preferences</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Movie Title</th>
              <th>Preference</th>
            </tr>
          </thead>
          <tbody>
            {this.props.preferences.map((preference) => (
              <tr key={preference.id}>
                <td className="flex flex-row">
                  <img
                    src={
                      'https://image.tmdb.org/t/p/w500/' +
                      this.state.movieLookup[preference.movie_id].poster_path
                    }
                    alt={this.state.movieLookup[preference.movie_id].title}
                    className="w-20"
                  ></img>
                  <span>{this.state.movieLookup[preference.movie_id].title}</span>     
                </td>
                <td>{preference.preference}</td>
                <td>
                  <button
                    onClick={this.props.deletePreference.bind(this, preference.id)}
                    className="btn btn-danger btn-sm"
                  >
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
