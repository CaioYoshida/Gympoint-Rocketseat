import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { useSelector } from 'react-redux';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';

import {
  Container,
  CheckinButton,
  CheckinScroll,
  CheckinView,
  CheckinTag,
  CheckinText,
  CheckinTime,
} from './styles';

import Header from '~/Components/Header';

export default function Checkins() {
  const student_id = useSelector(state => state.auth.user.id);

  const [checkins, setCheckins] = useState([]);
  const [checkinsLength, setCheckinsLength] = useState(0);

  useEffect(() => {
    async function loadCheckins() {
      try {
        const response = await api.get(`students/${student_id}/checkins`);

        const data = response.data.map(item => ({
          ...item,
          timeDistance: formatDistance(parseISO(item.createdAt), new Date(), {
            addSuffix: true,
            locale: pt,
          }),
        }));

        setCheckinsLength(data.length);
        setCheckins(data);
      } catch (error) {
        console.tron.log('erro');
        Alert.alert('Check-in', 'Erro');
      }
    }
    loadCheckins();
  }, [student_id, checkinsLength]);

  async function handleCheckin() {
    try {
      await api.post(`students/${student_id}/checkins`);

      setCheckinsLength(checkinsLength + 1);

      Alert.alert('Check-in', 'Check-in realizado com sucesso');
    } catch (erro) {
      Alert.alert(
        'Erro check-in',
        'Você atingiu o limite máximo de 5 check-ins em 7 dias corridos'
      );
    }
  }

  return (
    <>
      <Header />
      <Container>
        <CheckinButton onPress={handleCheckin}>Novo check-in</CheckinButton>
        <CheckinScroll>
          {checkins &&
            checkins.map(checkin => (
              <CheckinView key={checkin.id}>
                <CheckinTag>
                  <CheckinText>{`Check-in #${checkin.id}`}</CheckinText>
                  <CheckinTime>{checkin.timeDistance}</CheckinTime>
                </CheckinTag>
              </CheckinView>
            ))}
        </CheckinScroll>
      </Container>
    </>
  );
}
