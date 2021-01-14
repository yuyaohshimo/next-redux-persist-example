const initialState = {
  payload: {
    accessToken: '',
  },
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGNIN_SUCCESS':
      return {
        ...state,
        payload: {
          ...state.payload,
          accessToken: action.payload.accessToken,
        },
      };
    case 'LOGOUT':
      return {
        ...state,
        payload: {
          ...state.payload,
          accessToken: '',
        },
      };
    default:
      return state;
  }
};

export default auth;
