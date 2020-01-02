import { Platform } from 'react-native';
import styled from 'styled-components/native';

import Button from '~/Components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 15px;
  width: 100%;
`;

export const IDInput = styled.TextInput`
  border: 1px solid #ddd;
  border-radius: 4px;
  height: 46px;
  width: 100%;
  padding: 5px;
  padding-left: 25px;
  font-size: 16px;
  margin-top: 35px;
`;

export const Logo = styled.Image`
  height: 80px;
  width: 130px;
`;
