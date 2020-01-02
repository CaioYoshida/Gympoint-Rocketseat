import { Alert } from 'react-native';
import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '~/services/api';

import { signInSuccess } from './actions';

export function* signIn({ student_id }) {
  try {
    const response = yield call(api.get, `students/${student_id}`);

    const user = response.data;

    yield put(signInSuccess(user));

    // history.push('/enrollments');
  } catch (err) {
    console.tron.error('erro');
    Alert.alert(
      'ID inválido',
      'Verifique se seu ID está correto e tente novamente.'
    );
  }
}

export function signOut() {
  // history.push('/');
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
