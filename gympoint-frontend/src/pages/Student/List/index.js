import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

import { MdAccountBox, MdSearch } from 'react-icons/md';

import api from '~/services/api';
import history from '~/services/history';

import { Container, Menu, SearchBox, List } from './styles';

export default function Student() {
  const [students, setStudents] = useState([]);
  const [searchData, setSearchData] = useState('');

  useEffect(() => {
    async function loadStudents() {
      const response = await api.get('students');

      const { data } = response;

      setStudents(data);
    }
    loadStudents();
  }, []);

  async function handleSearch() {
    if (searchData === '') {
      const response = await api.get('students');

      setStudents(response.data);
    } else {
      const response = await api.get(`students?name=${searchData}`);

      setStudents(response.data);
    }
  }

  async function remove(id) {
    await api.delete(`students/${id}`);
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
        <span>Gerenciamento de Alunos</span>
        <Menu>
          <Link to="/students/add">
            <MdAccountBox size={24} color="#FFF" />
            CADASTRAR
          </Link>
          <SearchBox>
            <button type="button" onClick={() => handleSearch()}>
              <MdSearch size={24} color="#999" />
            </button>
            <input
              type="text"
              placeholder="Buscar Aluno"
              onChange={e => setSearchData(e.target.value)}
            />
          </SearchBox>
        </Menu>
      </div>
      <List>
        <tr>
          <th>NOME</th>
          <th>EMAIL</th>
          <th id="age">IDADE</th>
          <th />
        </tr>
        {students.map(student => (
          <tr>
            <td>{student.name}</td>
            <td>{student.email}</td>
            <td className="age_td">{student.age}</td>
            <td className="options">
              <button
                type="button"
                className="editar"
                onClick={() => {
                  history.push(`/students/${student.id}`);
                }}
              >
                editar
              </button>
              <button
                type="button"
                onClick={() => handleDelete(student.id)}
                className="apagar"
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
