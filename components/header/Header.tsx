import Style from './Header.module.scss';

import { mtbRegular } from '../../utils/fonts/customFonts';

function Header() {
  return (
    <h1 className={Style.header}>
      <span className={mtbRegular.className}>This is haeder</span>
    </h1>
  );
}

export default Header;
