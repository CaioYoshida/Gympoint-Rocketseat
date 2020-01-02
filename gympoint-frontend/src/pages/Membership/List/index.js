import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

import { MdPlaylistAdd } from 'react-icons/md';

import api from '~/services/api';
import history from '~/services/history';

import { Container, Menu, List } from './styles';
import { formatPrice } from '~/util/format';

export default function Membership() {
  const [memberships, setMemberships] = useState([]);

  useEffect(() => {
    async function loadMemberships() {
      const response = await api.get('memberships');

      const data = response.data.map(item => ({
        ...item,
        priceFormatted: formatPrice(item.price),
      }));

      setMemberships(data);
    }
    loadMemberships();
  }, []);

  async function remove(id) {
    await api.delete(`memberships/${id}`);
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
        <span>Gerenciamento de Planos</span>
        <Menu>
          <Link to="/memberships/add">
            <MdPlaylistAdd size={24} color="#FFF" />
            CADASTRAR
          </Link>
        </Menu>
      </div>
      <List>
        <tr>
          <th>TITULO</th>
          <th id="duracao">DURAÇÃO (em meses)</th>
          <th id="age">VALOR p/ MÊS</th>
          <th />
        </tr>
        {memberships.map(membership => (
          <tr>
            <td>{membership.title}</td>
            <td className="duracao_td">{membership.duration}</td>
            <td className="valor_td">{membership.priceFormatted}</td>
            <td className="options">
              <button
                type="button"
                className="editar"
                onClick={() => {
                  history.push(`/memberships/${membership.id}`);
                }}
              >
                editar
              </button>
              <button
                type="button"
                className="apagar"
                onClick={() => handleDelete(membership.id)}
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
