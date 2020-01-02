import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { MdArrowBack, MdSave } from 'react-icons/md';

import api from '~/services/api';

import { formatPrice } from '~/util/format';

import { Wrapper, MenuForm, TotalPrice } from './styles';

const schema = Yup.object().shape({
  title: Yup.string().required('Informação Obrigatória'),
  duration: Yup.number()
    .typeError('Valor inválido')
    .positive()
    .integer()
    .required('Informarção Obrigatória'),
  price: Yup.number()
    .typeError('Valor inválido')
    .positive()
    .required('Informação Obrigatória'),
});

export default function MembershipForm({ match }) {
  const { id } = match.params;

  const [title, setTitle] = useState();
  const [duration, setDuration] = useState(0);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    async function loadMemberships() {
      if (id) {
        const response = await api.get(`memberships/${id}`);

        const { data } = response;

        console.tron.log(data);

        setTitle(data.title);
        setDuration(data.duration);
        setPrice(data.price);
      }
    }
    loadMemberships();
  }, [id]);

  async function handleSubmit() {
    if (id) {
      try {
        await api.put(`memberships/${id}`, {
          title,
          duration,
          price,
        });

        toast.success('Registro atualizado com sucesso');
      } catch (err) {
        toast.error('Falha ao atualizar os dados');
      }
    } else {
      try {
        await api.post('memberships', {
          title,
          duration,
          price,
        });

        setTitle('');
        setDuration('');
        setPrice('');

        toast.success('Registro incluído com sucesso');
      } catch (err) {
        toast.error('Falha ao criar registro');
      }
    }
  }

  const totalPrice = useMemo(() => formatPrice(duration * price), [
    duration,
    price,
  ]);

  return (
    <Wrapper>
      <div>
        <h1>Cadastro de Plano</h1>
        <MenuForm>
          <Link to="/memberships">
            <MdArrowBack size={24} color="#FFF" />
            VOLTAR
          </Link>
          <button type="submit" form="my-form">
            <MdSave size={24} color="#FFF" />
            SALVAR
          </button>
        </MenuForm>
      </div>
      <Form id="my-form" schema={schema} onSubmit={handleSubmit}>
        <label htmlFor="title">TITULO DO PLANO</label>
        <Input
          name="title"
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <div>
          <div style={{ marginRight: '10px' }}>
            <label htmlFor="duration">DURAÇÃO (em meses)</label>
            <Input
              name="duration"
              type="number"
              value={duration}
              onChange={e => setDuration(e.target.value)}
            />
          </div>
          <div style={{ marginLeft: '10px', marginRight: '10px' }}>
            <label htmlFor="price">PREÇO MENSAL</label>
            <Input
              name="price"
              type="number"
              step="0.01"
              value={price}
              onChange={e => setPrice(e.target.value)}
            />
          </div>
          <div style={{ marginLeft: '10px' }}>
            <label htmlFor="price">PREÇO TOTAL</label>
            <TotalPrice>
              <span>{totalPrice}</span>
            </TotalPrice>
          </div>
        </div>
      </Form>
    </Wrapper>
  );
}

MembershipForm.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
