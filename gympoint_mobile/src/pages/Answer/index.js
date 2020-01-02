import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  QuestionBox,
  QuestionInformations,
  QuestionStatus,
  QuestionTime,
  QuestionText,
  AnswerBox,
} from './styles';

export default function Answer({ navigation }) {
  const index = JSON.stringify(navigation.getParam('index'));

  const help_order = useSelector(state => state.help_order.help_orders[index]);

  return (
    <Container>
      <QuestionBox>
        <QuestionInformations>
          <QuestionStatus>PERGUNTA</QuestionStatus>
          <QuestionTime>Há 7 dias</QuestionTime>
        </QuestionInformations>
        <QuestionText>{help_order && help_order.question}</QuestionText>
        <AnswerBox>
          <QuestionInformations>
            <QuestionStatus>RESPOSTA</QuestionStatus>
          </QuestionInformations>
          <QuestionText>{help_order && help_order.answer}</QuestionText>
        </AnswerBox>
      </QuestionBox>
    </Container>
  );
}

Answer.navigationOptions = ({ navigation }) => ({
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.navigate('List')}>
      <Icon name="chevron-left" size={20} color="#EE4E62" />
    </TouchableOpacity>
  ),
});

Answer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};
