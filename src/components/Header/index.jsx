import React from 'react';
import Nav from '../Nav';
import Cart from '../Cart/index'
import * as S from './index.styles';

function Header() {
  return (
    <S.Header>
        <S.Logo>ESHOP</S.Logo>
        <Nav/>
        <Cart/>
    </S.Header>
  )
}

export default Header;