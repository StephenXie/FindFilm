import { GET_RECOMMENDATIONS, GROUP_SUCCESS } from '../actions/types.js';

const initialState = {
  members: [],
  recommendations: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_RECOMMENDATIONS:
      return {
        ...state,
        recommendations: action.payload,
      };
    case GROUP_SUCCESS: {
      return {
        ...state,
        members: action.payload.members,
      };
    }
    default:
      return state;
  }
}
