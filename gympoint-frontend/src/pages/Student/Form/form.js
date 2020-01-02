import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { MdArrowBack, MdSave } from 'react-icons/md';

import api from '~/services/api';

import { Wrapper, MenuForm } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('Campo Obrigatório'),
  email: Yup.string()
    .email('Insira um email válido')
    .required('Campo Obrigatório'),
  age: Yup.number()
    .typeError('Valor inválido')
    .positive()
    .integer()
    .required('Campo Obrigatório'),
  height: Yup.number()
    .typeError('Valor inválido')
    .positive()
    .required('Campo Obrigatório'),
  weight: Yup.number()
    .typeError('Valor inválido')
    .positive()
    .required('Campo Obrigatório'),
});

export default function StudentForm({ match }) {
  const { id } = match.params;

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
  const [heigth, setHeigth] = useState();
  const [weigth, setWeigth] = useState();

  useEffect(() => {
    async function loadProfile() {
      if (id) {
        const response = await api.get(`students/${id}`);

        const { data } = response;

        setName(data.name);
        setEmail(data.email);
        setAge(data.age);
        setHeigth(data.heigth);
        setWeigth(data.weigth);
      }
    }
    loadProfile();
  }, [id]);

  async function handleSubmit() {
    if (id) {
      try {
        await api.put(`students/${id}`, {
          name,
          email,
          age,
          heigth,
          weigth,
        });

        toast.success('Aluno atualizado com sucesso');
      } catch (err) {
        toast.error('Falha ao atualizar o produto');
      }
    } else {
      try {
        await api.post('students', {
          name,
          email,
          age,
          heigth,
          weigth,
        });

        setName('');
        setEmail('');
        setAge('');
        setHeigth('');
        setWeigth('');

        toast.success('Aluno cadastrado com sucesso');
      } catch (err) {
        toast.error('Falha ao cadastrar aluno');
      }
    }
  }

  return (
    <Wrapper>
      <div>
        <h1>Cadastro de Aluno</h1>
        <MenuForm>
          <Link to="/students">
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
        <label htmlFor="name">NOME COMPLETO</label>
        <Input
          name="name"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <label htmlFor="email">SEU ENDERECO DE E-MAIL</label>
        <Input
          name="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <div>
          <div style={{ marginRight: '10px' }}>
            <label htmlFor="name">IDADE</label>
            <Input
              name="age"
              type="number"
              value={age}
              onChange={e => setAge(e.target.value)}
            />
          </div>
          <div style={{ marginLeft: '10px', marginRight: '10px' }}>
            <label htmlFor="name">PESO (em kg)</label>
            <Input
              name="weight"
              type="number"
              step="0.1"
              value={weigth}
              onChange={e => setWeigth(e.target.value)}
            />
          </div>
          <div style={{ marginLeft: '10px' }}>
            <label htmlFor="name">ALTURA</label>
            <Input
              name="height"
              type="number"
              step="0.01"
              value={heigth}
              onChange={e => setHeigth(e.target.value)}
            />
          </div>
        </div>
      </Form>
    </Wrapper>
  );
}

StudentForm.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
