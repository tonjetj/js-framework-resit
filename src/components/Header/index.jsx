import React from 'react';
import Nav from '../Nav';
import Cart from '../Cart';
import Search from '../Search';
import * as S from './index.styles';

function Header() {
  return (
    <S.Header>
        <S.Logo>ESHOP</S.Logo>
        <Nav/>
        <S.SearchCartContainer>
          <Search/>
          <Cart/>
        </S.SearchCartContainer>
    </S.Header>
  )
}

export default Header;