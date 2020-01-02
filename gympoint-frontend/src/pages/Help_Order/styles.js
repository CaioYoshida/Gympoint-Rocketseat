import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 900px;
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
    text-align: start;

    button {
      border: none;
      background: none;
      font-size: 16px;
      color: blue;
    }
  }

  .answer {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
`;
