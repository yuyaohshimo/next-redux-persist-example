import { createStore, applyMiddleware } from 'redux';
import { createWrapper, Context } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { persistStore } from 'redux-persist';

import reducer from 'store/reducers';
import persistMiddleware from 'store/middlewares/persistMiddleware';

const bindMiddleware = (middleware) => {
  return composeWithDevTools(applyMiddleware(...middleware));
};

const makeStore = (context: Context) => {
  const isServer = typeof window === 'undefined';
  const store = createStore(
    reducer,
    bindMiddleware([thunkMiddleware, persistMiddleware]),
  );
  if (isServer) {
    return store;
  }

  store['__persistor'] = persistStore(store); // Nasty hack
  return store;
};

export const wrapper = createWrapper(makeStore, { debug: true });
