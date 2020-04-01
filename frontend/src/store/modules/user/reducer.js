import { produce } from 'immer';

const INITIAL_STATE = [
  {
    email: '',
    name: '',
    password: '',
  },
];

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return produce(state, (draft) => {
        draft.email = action.email;
      });
    default:
      return state;
  }
}
