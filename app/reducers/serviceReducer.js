import {Types} from '../actions/actionTypes';

const userState = {
  usersLoading: false,
  usersData: [],
  usersDataClone: [],
  userLoading: false,
  user: {},
  modalVisible: false,
};

const serviceReducer = (state = userState, action) => {
  switch (action.type) {
    case Types.USERS_LOADING:
      return {
        ...state,
        usersLoading: action.payload,
      };
    case Types.USERS_DATA:
      return {
        ...state,
        usersData: action.payload,
      };
    case Types.USERS_DATA_CLONE:
      return {
        ...state,
        usersDataClone: action.payload,
      };
    case Types.USER_LOADING:
      return {
        ...state,
        userLoading: action.payload,
      };
    case Types.USER_DATA:
      return {
        ...state,
        user: action.payload,
      };

    case Types.MODAL_VISIBLE:
      return {
        ...state,
        modalVisible: action.payload,
      };
    default: {
      return state; // We return the default state here
    }
  }
};

export default serviceReducer;
