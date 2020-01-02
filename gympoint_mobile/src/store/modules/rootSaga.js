import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import help_order from './help_order/sagas';

export default function* rootSaga() {
  return yield all([auth, help_order]);
}
