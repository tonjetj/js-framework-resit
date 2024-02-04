import React from 'react';
import * as S from './index.styles';

function Nav() {
  return (
    <S.Nav>
                <S.Links to="/">Home</S.Links>
                <S.Links to="/contact">Contact</S.Links>
    </S.Nav>
  )
}

export default Nav;