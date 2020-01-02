import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { MdPlaylistAdd, MdCheckCircle, MdRemoveCircle } from 'react-icons/md';

import api from '~/services/api';
import history from '~/services/history';

import { Container, Menu, List } from './styles';

export default function Enrollment() {
  const [enrollments, setEnrollments] = useState([]);

  useEffect(() => {
    async function loadEnrollments() {
      const response = await api.get('enrollments');

      const data = response.data.map(item => ({
        ...item,
        startAt: format(parseISO(item.start_date), "dd 'de' MMMM 'de' yyyy", {
          locale: pt,
        }),
        endAt: format(parseISO(item.end_date), "dd 'de' MMMM 'de' yyyy", {
          locale: pt,
        }),
      }));

      setEnrollments(data);
    }
    loadEnrollments();
  }, []);

  async function remove(id) {
    await api.delete(`enrollments/${id}`);
  }

  async function handleDelete(id) {
    Swal.fire({
      title: 'Você tem certeza?',
      text: 'Esta ação não será reversível',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Deletar',
      cancelButtonText: 'Cancelar',
    }).then(result => {
      if (result.value) {
        remove(id);
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      }
    });
  }

  return (
    <Container>
      <div>
        <span>Gerenciamento de Matriculas</span>
        <Menu>
          <Link to="/enrollments/add">
            <MdPlaylistAdd size={24} color="#FFF" />
            CADASTRAR
          </Link>
        </Menu>
      </div>
      <List>
        <tr>
          <th>ALUNO</th>
          <th className="center">PLANO</th>
          <th className="center">INICIO</th>
          <th className="center">TERMINO</th>
          <th className="center">ATIVA</th>
          <th />
        </tr>
        {enrollments.map(enrollment => (
          <tr key={enrollment.id}>
            <td>{enrollment.student.name}</td>
            <td className="center">{enrollment.membership.title}</td>
            <td className="center">{enrollment.startAt}</td>
            <td className="center">{enrollment.endAt}</td>
            <td className="center">
              {enrollment.active ? (
                <MdCheckCircle size={24} color="#42CB59" />
              ) : (
                <MdRemoveCircle size={24} color="#ddd" />
              )}
            </td>
            <td className="options">
              <button
                type="button"
                className="editar"
                onClick={() => {
                  history.push(`/enrollments/${enrollment.id}`);
                }}
              >
                editar
              </button>
              <button
                type="button"
                className="apagar"
                onClick={() => handleDelete(enrollment.id)}
              >
                apagar
              </button>
            </td>
          </tr>
        ))}
      </List>
    </Container>
  );
}
