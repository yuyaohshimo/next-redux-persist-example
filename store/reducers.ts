import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import { CookieStorage } from 'redux-persist-cookie-storage';
import Cookies from 'js-cookie';

import appReducer from 'store/app';
import authReducer from 'store/auth';

const rootPersistConfig = {
  key: 'root',
  storage: new CookieStorage(Cookies, {
    setCookieOptions: {
      secure: process.env.NODE_ENV !== 'development',
    },
  }),
  whitelist: ['auth'],
};

export const rootReducers = combineReducers({
  app: appReducer,
  auth: authReducer,
});

export default persistReducer(rootPersistConfig, rootReducers);
