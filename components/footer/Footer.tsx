import { Open_Sans } from 'next/font/google';

import { FacebookIcon, InstaIcon, LinkedinIcon, Twitter } from '@/icons/icons';

import Link from 'next/link';

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

function Footer() {
  return (
    <footer className={`footer ${openSans.className}`}>
      <div className="container row">
        <div className="footer-col">
          <h4>company</h4>
          <ul>
            <li>
              <Link href="/"> about us </Link>
            </li>
            <li>
              <Link href="/"> our services </Link>
            </li>
            <li>
              <Link href="/"> privacy policy </Link>
            </li>
            <li>
              <Link href="/"> visit website </Link>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>get help</h4>
          <ul>
            <li>
              <Link href="/"> FAQ </Link>
            </li>
            <li>
              <Link href="/"> shipping </Link>
            </li>
            <li>
              <Link href="/"> returns </Link>
            </li>
            <li>
              <Link href="/"> order status </Link>
            </li>
            <li>
              <Link href="/"> payment options </Link>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>online shop</h4>
          <ul>
            <li>
              <Link href="/"> download </Link>
            </li>
            <li>
              <Link href="/"> changelog </Link>
            </li>
            <li>
              <Link href="/"> github</Link>
            </li>
            <li>
              <Link href="/">all version</Link>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>follow us</h4>
          <div className="social-links">
            <Link href="/">
              <FacebookIcon width={27} height={28} />
            </Link>

            <Link href="/">
              <InstaIcon width={27} height={28} />{' '}
            </Link>

            <Link href="/">
              <LinkedinIcon width={27} height={28} />
            </Link>

            <Link href="/">
              <Twitter width={27} height={28} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
