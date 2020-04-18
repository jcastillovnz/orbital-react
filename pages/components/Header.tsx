import Link from 'next/link';
import Head from 'next/head'
const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
   <Head>
        <title>Orbital - 360</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

{/*     <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/floor1">
      <a style={linkStyle}>R1</a>
    </Link> */}
  </div>
);

export default Header;