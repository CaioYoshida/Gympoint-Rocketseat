import produce from 'immer';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';

const INITIAL_STATE = {
  help_orders: [],
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@help_order/LOAD': {
        draft.help_orders = action.help_orders.map(item => ({
          ...item,
          timeDistance: formatDistance(parseISO(item.createdAt), new Date(), {
            addSuffix: true,
            locale: pt,
          }),
        }));
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.help_orders = null;
        break;
      }
      default:
    }
  });
}
