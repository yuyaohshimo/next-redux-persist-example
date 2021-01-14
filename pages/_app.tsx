import React, { FC } from 'react';
import { AppProps } from 'next/app';
import { PersistGate } from 'redux-persist/integration/react';
import { useStore } from 'react-redux';

import { wrapper } from 'store';
import GlobalHeader from 'components/GlobalHeader';

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => {
  const store: any = useStore();
  return (
    <PersistGate persistor={store.__persistor} loading={<div>Loading</div>}>
      <>
        <GlobalHeader />
        <Component {...pageProps} />
      </>
    </PersistGate>
  );
};

export default wrapper.withRedux(WrappedApp);
