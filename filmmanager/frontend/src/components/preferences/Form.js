import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addPreference } from '../../actions/preferences';
import movies from '../../../static/frontend/movies.json';

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
export class Form extends Component {
  state = {
    name: '',
    id: 0,
    status: 5,
    movies: shuffle(movies.movies),
  };

  static propTypes = {
    addPreference: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const { name, id, status } = this.state;
    const preference = { name, email, status };
    this.props.addPreference(preference);
    this.setState({
      name: '',
      id: '',
      status: '',
    });
  };
  handleClick = (step) => {
    if (this.state.id + step < 0 || this.state.id + step > this.state.movies.length - 1) {
      alert("You can't go further");
    } else {
      this.setState({ ...this.state, id: this.state.id + step });
    }
  };
  render() {
    const { name, id, status } = this.state;
    console.log();
    return (
      <div className="card card-body mt-4 mb-4">
        <h2 className="mx-auto font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Add Preference
        </h2>
        <form className="mx-auto w-4/5 max-w-4/5" onSubmit={this.onSubmit}>
          <div class="flex flex-row justify-center">
            <span className="font-bold text-xl mx-auto ">
              Movie title: {this.state.movies[id].title}
            </span>
          </div>
          <div className="">
            <img
              className="w-1/2 mx-auto mb-2"
              style={{ width: 200 }}
              src={'https://image.tmdb.org/t/p/w500/' + this.state.movies[id].poster_path}
              alt={this.state.movies[id].title}
            ></img>
          </div>
          {/* <div className="form-group flex flex-row justify-between">
            <button
              onClick={this.handleClick}
              className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              No
            </button>
            <button
              onClick={this.handleClick}
              className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Yes
            </button>
          </div> */}
          <div className="relative pt-1">
            <label htmlFor="customRange3" className="form-label flex flex-row justify-between">
              <span className="">0 - Hate it 🤮</span>
              <span className="">10 - Love it 🥰</span>
            </label>
            <input
              type="range"
              className="
form-range
appearance-none
w-full
h-4
p-0
bg-gray-200
rounded-xl
focus:outline-none focus:ring-0 focus:shadow-none
    "
              min={0}
              max={10}
              step="1"
              value={status}
              name="status"
              onChange={this.onChange}
              id="customRange3"
            />
          </div>
          <div className="form-group flex flex-row justify-around">
            <button
              onClick={() => this.handleClick(-1)}
              className="w-32 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Previous
            </button>
            <button
              onClick={() => this.handleClick(1)}
              className="w-32 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addPreference })(Form);
