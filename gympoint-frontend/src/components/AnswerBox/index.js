import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import { MdClose } from 'react-icons/md';

import api from '~/services/api';

import { Container, AnswerInput, SubmitButton } from './styles';

export default function AnswerBox({ handleCloseModal, helpOrderId }) {
  const [helpOrder, setHelpOrder] = useState('');
  const [answer, setAnswer] = useState('');

  useEffect(() => {
    async function loadHelpOrder() {
      const response = await api.get('help-orders');

      const { data } = response;

      const questionIndex = data.findIndex(item => item.id === helpOrderId);

      setHelpOrder(data[questionIndex]);
    }
    loadHelpOrder();
  }, [helpOrderId]);

  async function hanldeSubmit() {
    if (answer === '') {
      toast.error('Resposta vazia inválida');
    } else {
      try {
        await api.put(`help-orders/${helpOrderId}/answer`, {
          answer,
        });

        handleCloseModal();

        toast.success('Resposta enviada com sucesso');
      } catch (err) {
        toast.error('Erro no servidor');
      }
    }
  }

  return (
    <Container>
      <div className="answer">
        <button
          type="button"
          id="closeButton"
          title="Fechar"
          onClick={handleCloseModal}
        >
          <MdClose size={20} color="#000" />
        </button>
        <span className="title">PERGUNTA DO ALUNO</span>
        <p>{helpOrder.question}</p>
        <span className="title">SUA RESPOSTA</span>
        <AnswerInput
          placeholder="Insira sua resposta"
          onChange={e => setAnswer(e.target.value)}
        />
        <SubmitButton type="button" onClick={hanldeSubmit}>
          Responder Aluno
        </SubmitButton>
      </div>
    </Container>
  );
}

AnswerBox.propTypes = {
  handleCloseModal: PropTypes.func.isRequired,
  helpOrderId: PropTypes.string.isRequired,
};
