import { combineReducers } from 'redux';

import auth from './auth/reducer';
import help_order from './help_order/reducer';

export default combineReducers({
  auth,
  help_order,
});
