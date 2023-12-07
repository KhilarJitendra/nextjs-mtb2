import Style from './Header.module.scss';

function Header() {
  return (
    <h1 className={Style.header}>
      <span>This is haeder</span>
    </h1>
  );
}

export default Header;
