import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createGroup, getRecommendations } from '../../actions/groups';
import movieLookup from '../../../static/frontend/movieLookup.json';
// import Preferences from './Preferences';

export class Group extends Component {
  state = {
    group_id: '',
    modalOpen: false,
    hasGroup: false,
    movieLookup: movieLookup,
  };

  static propTypes = {
    recommendations: PropTypes.array.isRequired,
    members: PropTypes.array.isRequired,
    getRecommendations: PropTypes.func.isRequired,
    createGroup: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = () => {
    if (this.state.group_id === '') {
      const groupID = { group_id: Math.floor(Math.random() * 100000) };
      this.props.createGroup(groupID);
      this.setState({ ...this.state, group_id: groupID.group_id, hasGroup: true });
    } else {
      const groupID = { group_id: this.state.group_id };
      this.props.createGroup(groupID);
      this.setState({ ...this.state, group_id: groupID.group_id, hasGroup: true });
    }
    console.log(this.props.members);
  };

  toggleModal = () => {
    this.setState({ ...this.state, modalIsOpen: !this.state.modalIsOpen });
  };
  render() {
    // const { name, id, status } = this.state;
    const modal = (
      <div className="modal-box fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  z-50">
        <div className="add-form bg-white bg-opacity-100 relative w-full">
          <button
            className="font-bold text-lg text-red-600 absolute top-[-5%] right-0"
            onClick={this.toggleModal}
          >
            ╳
          </button>
          <h2 className="my-2 font-semibold">Movie Overview</h2>
        </div>
      </div>
    );
    return (
      <div className="card card-body mt-4 mb-4">
        <h2 className="mb-5 mx-auto font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Group
        </h2>

        {!this.state.hasGroup && (
          <form className="mx-auto w-4/5 max-w-4/5">
            <div className=" flex flex-col justify-center space-y-3">
              <div className="flex flex-cow justify-center">
                <button
                  onClick={this.onSubmit}
                  className="inline-block w-1/4 px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Create Group
                </button>
              </div>
              <div className="flex flex-row justify-center space-x-2">
                <input
                  type="text"
                  placeholder="Enter code"
                  className="input input-bordered w-full max-w-xs"
                />
                <button
                  onClick={this.onSubmit}
                  className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Join Group
                </button>
              </div>
            </div>
            {this.state.modalIsOpen && modal}
          </form>
        )}
        {this.state.hasGroup && (
            <div className="mx-auto w-4/5 max-w-4/5 flex flex-col justify-center space-y-3">
                <div className="flex flex-col justify-center font-bold">
                    <span className="flex flex-row justify-center">
                    Group ID: {this.state.group_id}
                    </span>
                    <span className="flex flex-row justify-center">
                    Members: {this.props.members}
                    </span>
                </div>
            </div>

  )}
      </div>
    );
  }
}

export default connect(null, { createGroup })(Group);
