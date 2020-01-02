import { Alert } from 'react-native';
import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '~/services/api';

import { loadHelp_orders, createHelp_ordersSuccess } from './actions';

export function* loadHelpOrders({ student_id }) {
  try {
    const response = yield call(api.get, `students/${student_id}/help-orders`);

    const help_orders = response.data;

    yield put(loadHelp_orders(help_orders));
  } catch (err) {
    Alert.alert('Erro no servidor', 'Tente novamente mais tarde');
  }
}

export function* createHelpOrder({ student_id, question }) {
  try {
    yield call(api.post, `students/${student_id}/help-orders`, {
      question,
    });

    yield put(createHelp_ordersSuccess(student_id));

    Alert.alert('Sucesso', 'Seu mensagem foi enviada. Em breve responderemos');
  } catch (err) {
    Alert.alert('Erro', 'Erro ao enviar mensagem. Tente novamente mais tarde');
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', loadHelpOrders),
  takeLatest('@help_order/CREATE_REQUEST', createHelpOrder),
  takeLatest('@help_order/CREATE_SUCCESS', loadHelpOrders),
]);
