export function signin() {
  return async (dispatch) => {
    try {
      const res = await fetch(`${location.origin}/api/signin`);
      const body = await res.json();
      dispatch({
        type: 'SIGNIN_SUCCESS',
        payload: body,
      });
    } catch (e) {
      dispatch({
        type: 'SIGNIN_ERROR',
      });
    }
  };
}

export function logout() {
  return async (dispatch) => {
    dispatch({
      type: 'LOGOUT',
    });
  };
}
