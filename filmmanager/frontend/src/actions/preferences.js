import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './auth';

import { GET_PREFERENCES, DELETE_PREFERENCE, ADD_PREFERENCE } from './types';

// GET PREFERENCES
export const getPreferences = () => (dispatch, getState) => {
  axios
    .get('/api/preferences/', tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_PREFERENCES,
        payload: res.data,
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};

// DELETE PREFERENCES
export const deletePreference = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/preferences/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ deletePreference: 'Preference Deleted' }));
      dispatch({
        type: DELETE_PREFERENCE,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

// ADD PREFERENCES
export const addPreference = (preference) => (dispatch, getState) => {
  axios
    .post('/api/preferences/', preference, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ addPreference: 'Preference Added' }));
      dispatch({
        type: ADD_PREFERENCE,
        payload: res.data,
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};
