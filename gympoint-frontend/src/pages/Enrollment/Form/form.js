import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Form, Select, Input } from '@rocketseat/unform';
import { format, addMonths, parseISO, formatISO } from 'date-fns';
import * as Yup from 'yup';

import { MdArrowBack, MdSave } from 'react-icons/md';

import api from '~/services/api';

import { formatPrice } from '~/util/format';

import { Wrapper, MenuForm, TotalPrice, EndDate } from './styles';

const schema = Yup.object().shape({
  student_id: Yup.string().required('O aluno é obrigatório'),
  membership_id: Yup.string().required('O plano é obrigatório'),
  start_date: Yup.date()
    .typeError('Data inválida')
    .required('A data de início é obrigatório'),
});

export default function EnrollmentForm({ match }) {
  const { id } = match.params;

  const [student_id, setStudent_id] = useState();
  const [students, setStudents] = useState([]);

  const [membership_id, setMembership_id] = useState();
  const [memberships, setMemberships] = useState([]);

  const [start_date, setStart_date] = useState(formatISO(new Date()));
  const [duration, setDuration] = useState(0);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    async function loadStudents() {
      const response = await api.get('students');

      const data = response.data.map(item => ({
        id: item.id,
        title: item.name,
      }));

      setStudents(data);
    }
    loadStudents();
  }, []);

  useEffect(() => {
    async function loadMemberships() {
      const response = await api.get('memberships');

      const data = response.data.map(item => ({
        id: item.id,
        title: item.title,
      }));

      setMemberships(data);
    }
    loadMemberships();
  }, []);

  useEffect(() => {
    async function loadEnrollments() {
      if (id) {
        const response = await api.get(`enrollments/${id}`);

        const { data } = response;

        const startAt = format(parseISO(data.start_date), 'yyyy-MM-dd');

        setStudent_id(data.student.id);
        setMembership_id(data.membership.id);
        setStart_date(startAt);
      }
    }
    loadEnrollments();
  }, [id]);

  useEffect(() => {
    async function loadMemberhsipData() {
      const response = await api.get(`memberships/${membership_id}`);

      const { data } = response;

      setDuration(data.duration);
      setPrice(data.price);
    }
    loadMemberhsipData();
  }, [membership_id]);

  const totalPrice = useMemo(() => formatPrice(duration * price), [
    duration,
    price,
  ]);

  const end_date = useMemo(
    () => format(addMonths(parseISO(start_date), duration), 'MM/dd/yyyy'),
    [start_date, duration]
  );

  async function handleSubmit() {
    if (id) {
      try {
        await api.put(`enrollments/${id}`, {
          student_id,
          membership_id,
          start_date,
        });

        toast.success('Matricula atualizada com sucesso');
      } catch (err) {
        toast.error('Falha ao atualizar matricula');
      }
    } else {
      try {
        await api.post('enrollments', {
          student_id,
          membership_id,
          start_date,
        });

        setStudent_id('');

        toast.success('Matricula registrada com sucesso');
      } catch (err) {
        toast.error('Falha ao registrar matricula');
      }
    }
  }

  return (
    <Wrapper>
      <div>
        <h1>Cadastro de Matrícula</h1>
        <MenuForm>
          <Link to="/enrollments">
            <MdArrowBack size={24} color="#FFF" />
            VOLTAR
          </Link>
          <button type="submit" form="my-form">
            <MdSave size={24} color="#FFF" />
            SALVAR
          </button>
        </MenuForm>
      </div>
      <Form schema={schema} onSubmit={handleSubmit} id="my-form">
        <label htmlFor="student">ALUNO</label>
        <Select
          name="student_id"
          value={student_id}
          options={students}
          onChange={e => setStudent_id(e.target.value)}
        />
        <div>
          <div style={{ marginRight: '10px' }}>
            <label htmlFor="membership">PLANO</label>
            <Select
              name="membership_id"
              value={membership_id}
              options={memberships}
              onChange={e => setMembership_id(e.target.value)}
            />
          </div>
          <div style={{ marginLeft: '10px', marginRight: '10px' }}>
            <label htmlFor="start_date">DATA DE INÍCIO</label>
            <Input
              name="start_date"
              type="date"
              value={start_date}
              onChange={e => setStart_date(e.target.value)}
            />
          </div>
          <div style={{ marginLeft: '10px', marginRight: '10px' }}>
            <label htmlFor="price">DATA DE TÉRMINO</label>
            <EndDate>
              <span>{end_date}</span>
            </EndDate>
          </div>
          <div style={{ marginLeft: '10px' }}>
            <label htmlFor="price">VALOR FINAL</label>
            <TotalPrice>
              <span>{totalPrice}</span>
            </TotalPrice>
          </div>
        </div>
      </Form>
    </Wrapper>
  );
}

EnrollmentForm.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
