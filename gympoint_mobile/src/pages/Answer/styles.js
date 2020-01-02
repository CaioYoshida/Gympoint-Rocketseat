import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  padding: 0 20px;
  background: #f5f5f5;
`;

export const QuestionBox = styled.View`
  margin-top: 20px;
  padding: 20px;
  background: #fff;
  border-radius: 4px;
  border: 1px solid #ddd;
`;

export const AnswerBox = styled.View`
  margin-top: 20px;
`;

export const QuestionInformations = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const QuestionStatus = styled.Text`
  color: #444;
  font-weight: bold;
`;

export const QuestionTime = styled.Text`
  color: #666;
`;

export const QuestionText = styled.Text`
  margin-top: 15px;
  line-height: 26px;
  color: #666;
`;
