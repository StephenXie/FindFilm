import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './auth';

import { GROUP_SUCCESS, GROUP_FAIL, GET_RECOMMENDATIONS, GET_MEMBERS } from './types';

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

export const getMembers = (groupID) => (dispatch, getState) => {
    axios
      .get('/api/group', tokenConfig(getState))
      .then((res) => {
        dispatch(createMessage({ getMembers: 'Members Loaded' }));
        dispatch({
          type: GET_MEMBERS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch(returnErrors(err.response.data, err.response.status));
      });
  };

export const getRecommendations = (groupID) => (dispatch, getState) => {
    axios
      .get('/api/grouprecommend', tokenConfig(getState))
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
  
