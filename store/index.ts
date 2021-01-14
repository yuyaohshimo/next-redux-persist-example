import { createStore, AnyAction, applyMiddleware } from 'redux';
import { MakeStore, createWrapper, Context, HYDRATE } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import persistMiddleware from 'store/middlewares/persistMiddleware';

export interface State {
  tick: string;
}

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

// create your reducer
const reducer = (state: State = { tick: 'init' }, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      // Attention! This will overwrite client state! Real apps should use proper reconciliation.
      return { ...state, ...action.payload };
    case 'TICK':
      return { ...state, tick: action.payload };
    default:
      return state;
  }
};

// create a makeStore function
const makeStore: MakeStore<State> = (context: Context) =>
  createStore(reducer, bindMiddleware([thunkMiddleware, persistMiddleware]));

// export an assembled wrapper
export const wrapper = createWrapper<State>(makeStore, { debug: true });
