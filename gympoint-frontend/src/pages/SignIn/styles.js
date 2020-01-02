import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 4px;
  height: 100%;
  max-height: 450px;
  width: 360px;
  background: #fff;
  box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    margin-top: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 20px;
    padding: 10px 30px;

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

    button {
      height: 45px;
      background: #ee4d64;
      border: none;
      border-radius: 4px;
      color: #fff;
      font-weight: bold;
      font-size: 16px;
      margin-bottom: 15px;
    }

    span {
      color: red;
      margin-bottom: 10px;
    }
  }
`;
