import {Types} from './actionTypes';
import axios from 'axios';
const url = 'https://api.github.com/users';

export const fetchUsers = () => {
  return async dispatch => {
    dispatch({type: Types.USERS_LOADING, payload: true});
    try {
      axios({
        method: 'GET',
        url,
      })
        .then(res => {
          dispatch({type: Types.USERS_LOADING, payload: false});
          dispatch({type: Types.USERS_DATA, payload: res.data});
          dispatch({type: Types.USERS_DATA_CLONE, payload: res.data});
        })
        .catch(e => {
          console.log(e, 'Error');
          dispatch({type: Types.USERS_LOADING, payload: false});
          return e;
        });
    } catch (err) {
      console.log(err, 'Error');
    }
  };
};

export const fetchUser = userName => {
  return async dispatch => {
    dispatch({type: Types.USER_LOADING, payload: true});
    try {
      axios({
        method: 'GET',
        url: `${url}/${userName}`,
      })
        .then(res => {
          dispatch({type: Types.MODAL_VISIBLE, payload: true});
          dispatch({type: Types.USER_LOADING, payload: false});
          dispatch({type: Types.USER_DATA, payload: res.data});
        })
        .catch(e => {
          dispatch({type: Types.USER_LOADING, payload: false});
          return e;
        });
    } catch (err) {
      console.log(err, 'Error');
    }
  };
};
