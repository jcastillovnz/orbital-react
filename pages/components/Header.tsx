import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/floor1">
      <a style={linkStyle}>R1</a>
    </Link>
  </div>
);

export default Header;