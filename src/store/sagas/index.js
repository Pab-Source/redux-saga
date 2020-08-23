import { call, takeLatest, put, delay } from 'redux-saga/effects';
import * as actions from '../actions';

const fetchUsers = () =>
  fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json());

function* getUsers() {
  try {
    const users = yield call(fetchUsers);
    yield delay(2000);
    yield put({
      type: actions.getUsersSuccess.type,
      payload: {
        users,
        loading: false,
      },
    });
  } catch (error) {
    yield put({
      type: actions.getUsersError.type,
      payload: {
        loading: false,
        error,
      },
    });
  }
}

export default function* getUsersWathcher() {
  yield takeLatest(actions.getUsersInit.type, getUsers);
}
