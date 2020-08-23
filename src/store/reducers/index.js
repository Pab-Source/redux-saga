import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const initialState = {
  users: [],
  loading: false,
  error: null,
};

const reducerUsers = handleActions(
  {
    [actions.getUsersInit.type]: (state, action) => ({
      ...state,
      loading: action.payload.loading,
    }),
    [actions.getUsersSuccess.type]: (state, action) => ({
      ...state,
      loading: action.payload.loading,
      users: action.payload.users,
    }),
    [actions.getUsersError.type]: (state, action) => ({
      ...state,
      loading: action.payload.loading,
      error: action.payload.error,
    }),
  },
  initialState,
);

const rootReducer = combineReducers({
  users: reducerUsers,
});

export default rootReducer;
