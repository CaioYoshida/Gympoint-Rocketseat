import styled from 'styled-components/native';

import Button from '~/Components/Button';

export const Container = styled.View`
  flex: 1;
  padding: 0 20px;
  background: #f5f5f5;
`;

export const QuestionText = styled.TextInput.attrs({
  textAlignVertical: 'top',
})`
  background: #fff;
  border-radius: 4px;
  border: 1px solid #ddd;
  margin-top: 20px;
  height: 300px;
  padding: 15px;
  font-size: 16px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 20px;
`;
