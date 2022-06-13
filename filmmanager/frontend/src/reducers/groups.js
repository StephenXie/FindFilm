import { GET_RECOMMENDATIONS, GROUP_SUCCESS, GET_MEMBERS } from '../actions/types.js';

const initialState = {
  members: [],
  recommendations: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_RECOMMENDATIONS:
      return {
        ...state,
        recommendations: action.payload.movies,
      };
    case GROUP_SUCCESS: {
      return {
        ...state,
        members: action.payload.members,
      };
    };
    case GET_MEMBERS: {
      return {
        ...state,
        members: action.payload.members,
      };
    };
    default:
      return state;
  }
}
