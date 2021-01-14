import { useSelector } from 'react-redux';
import Link from 'next/link';

const Top = () => {
  const accessToken = useSelector(({ auth }) => auth.payload.accessToken);
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
