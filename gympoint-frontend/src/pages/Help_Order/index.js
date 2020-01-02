import React, { useState, useEffect } from 'react';

import api from '~/services/api';

import { Container, List } from './styles';
import AnswerBox from '~/components/AnswerBox';

export default function Help_Order() {
  const [helpOrders, setHelpOrders] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [helpOrderId, setHelpOrderId] = useState(0);

  useEffect(() => {
    async function loadHelpOrders() {
      const response = await api.get('help-orders');

      setHelpOrders(response.data);
    }
    loadHelpOrders();
  }, []);

  async function handleAnswer(id) {
    setShowModal(true);

    setHelpOrderId(id);
  }

  function closeModal() {
    setShowModal(false);
  }

  return (
    <Container>
      <div>
        <span>Pedidos de Auxilio</span>
      </div>
      <List>
        <tr>
          <th>ALUNO</th>
          <th />
        </tr>
        {helpOrders.map(helpOrder => (
          <tr>
            <td>{helpOrder.student.name}</td>
            <td className="answer">
              <button type="button" onClick={() => handleAnswer(helpOrder.id)}>
                responder
              </button>
            </td>
          </tr>
        ))}
      </List>
      {showModal ? (
        <AnswerBox handleCloseModal={closeModal} helpOrderId={helpOrderId} />
      ) : null}
    </Container>
  );
}
