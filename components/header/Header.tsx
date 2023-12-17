import {
  CartIcon,
  HamburgerIcon,
  LogoIcon,
  MyaccountIcon,
  SearchIcon,
} from '../../icons/icons';

import Style from './Header.module.scss';

import { Playfair_Display } from 'next/font/google';

const playFair = Playfair_Display({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

function Header() {
  return (
    <header
      className={`mtb_container ${Style.headerContainer} ${playFair.className}`}
    >
      <div className={Style.hamburgerMobile}>
        <HamburgerIcon width={24} height={18.67} />
      </div>

      <div className={Style.headerLogo}>
        <LogoIcon width={144} height={36} />
      </div>

      <div className={Style.headerLogoMobile}>
        <LogoIcon width={121} height={26} />
      </div>

      <ul className={Style.headerNav}>
        <li className={Style.headerNavLi}>
          {' '}
          <a className={Style.headerNavAnch} href="">
            Home
          </a>
        </li>
        <li className={Style.headerNavLi}>
          {' '}
          <a className={Style.headerNavAnch} href="">
            Products
          </a>
        </li>
        <li className={Style.headerNavLi}>
          {' '}
          <a className={Style.headerNavAnch} href="">
            Categories
          </a>
        </li>
        <li className={Style.headerNavLi}>
          {' '}
          <a className={Style.headerNavAnch} href="">
            About
          </a>
        </li>
        <li className={Style.headerNavLi}>
          {' '}
          <a className={Style.headerNavAnch} href="">
            Contacts
          </a>
        </li>
      </ul>

      <div className={Style.hamburger}>
        <HamburgerIcon width={31} height={24.11} />
      </div>

      <div className={Style.headerRightMenus}>
        <div className={`${Style.headerIcon} search`}>
          <SearchIcon width={27} height={26.99} />
        </div>

        <div className={`${Style.headerIcon} cart`}>
          <CartIcon width={27} height={27} />
        </div>

        <div className={`${Style.headerIcon} account`}>
          <MyaccountIcon width={26} height={26} />
        </div>
      </div>

      <div className={Style.headerRightMenusMobile}>
        <div className={`${Style.headerIconMobile} search`}>
          <SearchIcon width={21.55} height={21.54} />
        </div>

        <div className={`${Style.headerIconMobile} cart`}>
          <CartIcon width={21.55} height={21.55} />
        </div>

        <div className={`${Style.headerIconMobile} account`}>
          <MyaccountIcon width={20.75} height={20.75} />
        </div>
      </div>
    </header>
  );
}

export default Header;
