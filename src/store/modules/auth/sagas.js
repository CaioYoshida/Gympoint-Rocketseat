import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import { signInSuccess } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    yield put(signInSuccess(token, user));

    history.push('/enrollments');
  } catch (err) {
    console.tron.error('erro');
    toast.error('E-mail ou senha inválidos');
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
