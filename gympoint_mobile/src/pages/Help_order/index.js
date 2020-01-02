import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { createHelp_ordersRequest } from '~/store/modules/help_order/actions';

// import api from '~/services/api';

import { Container, QuestionText, SubmitButton } from './styles';

export default function Help_order() {
  const student_id = useSelector(state => state.auth.user.id);

  const dispatch = useDispatch();

  const [question, setQuestion] = useState();

  async function handleSubmit() {
    dispatch(createHelp_ordersRequest(student_id, question));

    setQuestion('');
  }

  return (
    <Container>
      <QuestionText
        placeholder="Insira seu pedido de auxílio"
        multiline
        value={question}
        onChangeText={setQuestion}
      />
      <SubmitButton onPress={handleSubmit}>Enviar pedido</SubmitButton>
    </Container>
  );
}

Help_order.navigationOptions = ({ navigation }) => ({
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.navigate('List')}>
      <Icon name="chevron-left" size={20} color="#EE4E62" />
    </TouchableOpacity>
  ),
});
