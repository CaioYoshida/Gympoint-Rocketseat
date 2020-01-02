import React from 'react';
import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { signOut } from '~/store/modules/auth/actions';

import {
  Container,
  LogOutButton,
  TopTitle,
  Title,
  Subtitle,
  NameView,
  EmailView,
  InformationsView,
} from './styles';

import Header from '~/Components/Header';

export default function Profile() {
  const profile = useSelector(state => state.auth.user);

  const dispatch = useDispatch();

  function handleLogOut() {
    dispatch(signOut());
  }

  return (
    <>
      <Header />
      <Container>
        <TopTitle>Seu Perfil</TopTitle>
        <NameView>
          <Title>Nome</Title>
          <Subtitle>{profile.name}</Subtitle>
        </NameView>
        <EmailView>
          <Title>E-mail</Title>
          <Subtitle>{profile.email}</Subtitle>
        </EmailView>
        <InformationsView>
          <View>
            <Title>Idade</Title>
            <Subtitle>{profile.age}</Subtitle>
          </View>
          <View>
            <Title>Peso</Title>
            <Subtitle>{`${profile.weigth} kg`}</Subtitle>
          </View>
          <View>
            <Title>Altura</Title>
            <Subtitle>{`${profile.heigth} m`}</Subtitle>
          </View>
        </InformationsView>
        <LogOutButton onPress={handleLogOut}>Sair do aplicativo</LogOutButton>
      </Container>
    </>
  );
}
