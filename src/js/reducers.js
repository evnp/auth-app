import { ACTIONS } from './actions';

export const initialState = {
  loadingAuthState: true,
  user: null,
};

export function reducer(state=initialState, action) {
  let {
    type,
    user,
  } = action;

  switch (type) {
    case ACTIONS.CHANGE_USER:
      return {...state, user, loadingAuthState: false};
    default:
      return state;
  }
}
