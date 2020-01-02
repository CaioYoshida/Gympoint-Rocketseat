import styled from 'styled-components/native';
import { TouchableOpacity, ScrollView } from 'react-native';

import Button from '~/Components/Button';

export const Container = styled.View`
  flex: 1;
  padding: 0 20px;
  background: #f5f5f5;
`;

export const CreateQuestionButton = styled(Button)`
  margin-top: 20px;
`;

export const QuestionList = styled(ScrollView)`
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const QuestionBox = styled(TouchableOpacity)`
  margin-top: 10px;
  padding: 20px;
  background: #fff;
  border-radius: 4px;
  border: 1px solid #ddd;
`;

export const QuestionInformations = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const QuestionStatus = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const StatusTextUnread = styled.Text`
  color: #999;
  font-weight: bold;
  padding-left: 10px;
`;

export const StatusTextRead = styled.Text`
  color: #42cb59;
  font-weight: bold;
  padding-left: 10px;
`;

export const QuestionTime = styled.Text`
  color: #444;
`;

export const QuestionText = styled.Text`
  margin-top: 15px;
  line-height: 26px;
  color: #444;
`;
