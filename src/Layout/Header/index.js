import React from 'react';
import './Header.scss';
import HeaderMenu from "./HeaderMenu";
import HeaderTopbar from './HeaderTopbar';

function Header() {
  return (
    <>
      <HeaderTopbar />
      <HeaderMenu />
    </>
  );
}

export default Header;