import produce from 'immer';

const INITIAL_STATE = {
  signed: false,
  user: null,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.signed = true;
        draft.user = action.user;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.signed = false;
        draft.user = null;
        break;
      }
      default:
    }
  });
}
