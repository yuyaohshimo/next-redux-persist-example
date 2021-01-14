import { useSelector } from 'react-redux';
import Link from 'next/link';

import { IAuthState } from 'store/auth';

const Top = () => {
  const accessToken = useSelector(
    ({ auth }: { auth: IAuthState }) => auth.payload.accessToken,
  );
  return (
    <div>
      <h1>Top Page</h1>
      {accessToken ? (
        <p>{`Your access token: ${accessToken}.`}</p>
      ) : (
        <p>
          You are not signed in. Please sign in{' '}
          <Link href="/signin">
            <a>here</a>
          </Link>
          .
        </p>
      )}
    </div>
  );
};

export default Top;
