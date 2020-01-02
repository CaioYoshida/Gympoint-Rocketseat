import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, SubmitButton, IDInput, Logo } from './styles';

import logo from '~/assets/logo.png';

import { signInRequest } from '~/store/modules/auth/actions';

export default function SignIn() {
  const dispatch = useDispatch();
  const [student_id, setStudent_id] = useState();

  async function handleSubmit() {
    dispatch(signInRequest(student_id));
  }

  return (
    <Container>
      <Logo source={logo} />
      <IDInput
        placeholder="Informe seu ID de cadastro"
        value={student_id}
        onChangeText={setStudent_id}
      />
      <SubmitButton onPress={handleSubmit}>Entrar no sistema</SubmitButton>
    </Container>
  );
}
