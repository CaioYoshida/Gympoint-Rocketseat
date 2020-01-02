import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 15px;
  padding: 30px;

  span {
    color: red;
    margin-bottom: 10px;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-size: 24px;
      font-weight: bold;
    }
  }

  form {
    background: #fff;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 20px;
    padding: 30px 30px;

    label {
      font-size: 14px;
      font-weight: bold;
      margin-bottom: 10px;
    }

    input {
      width: 100%;
      margin-bottom: 20px;
      height: 45px;
      padding: 0 10px;
      border-radius: 4px;
      border: 1px solid #ddd;
      color: #999;
      font-size: 16px;
    }

    div {
      div {
        width: 260px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }
    }
  }
`;

export const MenuForm = styled.div`
  a {
    text-decoration: none;
    padding: 6px 10px;
    margin-right: 16px;
    background: #bbb;
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

  button {
    padding: 6px 10px;
    margin-right: 16px;
    background: #ee4d64;
    border: none;
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
