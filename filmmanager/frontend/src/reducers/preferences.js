import { GET_LEADS, DELETE_LEAD, ADD_LEAD, CLEAR_LEADS } from '../actions/types.js';

const initialState = {
  preferences: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LEADS:
      return {
        ...state,
        preferences: action.payload,
      };
    case DELETE_LEAD:
      return {
        ...state,
        preferences: state.preferences.filter((preference) => preference.id !== action.payload),
      };
    case ADD_LEAD:
      return {
        ...state,
        preferences: [...state.preferences, action.payload],
      };
    case CLEAR_LEADS:
      return {
        ...state,
        preferences: [],
      };
    default:
      return state;
  }
}
