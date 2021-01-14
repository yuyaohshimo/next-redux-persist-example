import Link from 'next/link';

const GlobalHeader = () => (
  <ul>
    <li>
      <Link href="/">
        <a>Top</a>
      </Link>
    </li>
    <li>
      <Link href="/signin">
        <a>Signin</a>
      </Link>
    </li>
    <li>
      <Link href="/logout">
        <a>Logout</a>
      </Link>
    </li>
  </ul>
);

export default GlobalHeader;
