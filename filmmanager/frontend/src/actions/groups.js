import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './auth';

import { GROUP_SUCCESS, GROUP_FAIL, GET_RECOMMENDATIONS } from './types';

export const createGroup = (groupID) => (dispatch, getState) => {
  axios
    .post('/api/group', groupID, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ createGroup: 'Group Joined' }));
      dispatch({
        type: GROUP_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: GROUP_FAIL,
      });
    });
};

export const getRecommendation = (groupID) => (dispatch, getState) => {
    axios
      .get('/api/group', groupID, tokenConfig(getState))
      .then((res) => {
        dispatch({
          type: GET_RECOMMENDATIONS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch(returnErrors(err.response.data, err.response.status));
      });
  };
  
