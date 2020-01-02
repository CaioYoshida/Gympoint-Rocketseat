import styled from 'styled-components/native';

import Button from '~/Components/Button';

export const Container = styled.View`
  background: #f5f5f5;
  flex: 1;
  padding: 0 20px;
`;

export const CheckinButton = styled(Button)`
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const CheckinScroll = styled.ScrollView`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const CheckinView = styled.View`
  margin-top: 10px;
`;

export const CheckinTag = styled.View`
  background: #fff;
  border-radius: 4px;
  border: 1px solid #ddd;
  height: 46px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
`;

export const CheckinText = styled.Text`
  font-weight: bold;
  color: #444;
`;

export const CheckinTime = styled.Text`
  color: #666;
`;
