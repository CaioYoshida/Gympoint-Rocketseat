import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-top: 15px;
  padding: 30px;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    span {
      font-size: 24px;
      font-weight: bold;
    }
  }
`;

export const Menu = styled.div`
  a {
    text-decoration: none;
    padding: 6px 10px;
    background: #ee4d64;
    border-radius: 4px;
    color: #fff;
    font-size: 14px;
    font-weight: bold;

    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
      margin-right: 10px;
    }
  }
`;

export const List = styled.table`
  margin-top: 20px;
  padding: 30px;
  width: 100%;
  background: #fff;
  border-radius: 4px;

  th {
    padding: 12px 0;
    font-size: 16px;
    text-align: left;
    border: none;
  }

  #age {
    text-align: center;
  }

  #duracao {
    text-align: center;
  }

  td {
    font-size: 16px;
    padding: 22px 0;
    border-top: 1px solid #eee;

    button {
      border: none;
      background: none;
      font-size: 16px;
    }
  }

  .valor_td {
    text-align: center;
  }

  .duracao_td {
    text-align: center;
  }

  .options {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .editar {
    color: blue;
    margin-right: 20px;
  }

  .apagar {
    color: red;
  }
`;
