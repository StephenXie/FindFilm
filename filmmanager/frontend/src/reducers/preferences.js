import { GET_PREFERENCES, DELETE_PREFERENCE, ADD_PREFERENCE, CLEAR_PREFERENCES } from '../actions/types.js';

const initialState = {
  preferences: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PREFERENCES:
      return {
        ...state,
        preferences: action.payload,
      };
    case DELETE_PREFERENCE:
      return {
        ...state,
        preferences: state.preferences.filter((preference) => preference.id !== action.payload),
      };
    case ADD_PREFERENCE:
      return {
        ...state,
        preferences: [...state.preferences, action.payload],
      };
    case CLEAR_PREFERENCES:
      return {
        ...state,
        preferences: [],
      };
    default:
      return state;
  }
}
