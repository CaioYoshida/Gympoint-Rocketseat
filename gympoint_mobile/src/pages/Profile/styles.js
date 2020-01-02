import styled from 'styled-components/native';

import Button from '~/Components/Button';

export const Container = styled.View`
  flex: 1;
  padding: 0 20px;
  background: #f5f5f5;
`;

export const LogOutButton = styled(Button)`
  margin-top: 290px;
`;

export const TopTitle = styled.Text`
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
  align-self: center;
  color: #ee4d64;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #666;
`;

export const Subtitle = styled.Text`
  margin-top: 2px;
  font-size: 16px;
  color: #999;
`;

export const NameView = styled.View`
  margin-top: 20px;
  padding: 10px 20px;
`;

export const EmailView = styled.View`
  padding: 10px 20px;
`;

export const InformationsView = styled.View`
  padding: 10px 20px;
  flex-direction: row;
  justify-content: space-between;
`;
