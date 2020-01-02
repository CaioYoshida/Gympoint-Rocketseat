import React from 'react';

import { Container, Logo, LogoText } from './styles';

import Gym from '~/assets/Gym.png';

export default function Header() {
  return (
    <Container>
      <Logo source={Gym} />
      <LogoText>GYMPOINT</LogoText>
    </Container>
  );
}
