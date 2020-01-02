import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1100px;
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

    select {
      border: 1px solid #ddd;
      border-radius: 4px;
      height: 45px;
      width: 100%;

      color: #999;
      font-size: 16px;

      margin-bottom: 20px;
    }

    div {
      div {
        max-width: 230px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

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
      }
    }
  }
`;

export const MembershipSelect = styled.div`
  border: 1px solid #ddd;
  border-radius: 4px;
  height: 45px;
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  padding: 10px;
  margin-bottom: 20px;

  button {
    border: none;
    background: none;
  }
`;

export const MembershipInput = styled.input`
  width: 100%;
  color: #999;
  border: none;
  font-size: 16px;
`;

export const DateInput = styled.input`
  width: 100%;
  margin-bottom: 20px;
  height: 45px;
  padding: 0 10px;
  border-radius: 4px;
  border: 1px solid #ddd;
  color: #999;
  font-size: 16px;
`;

export const TotalPrice = styled.div`
  width: 100%;
  margin-bottom: 20px;
  height: 45px;
  padding: 0 10px;
  border-radius: 4px;
  border: 1px solid #ddd;
  color: #999;
  background: #eee;
  font-size: 16px;

  span {
    color: #999;
    padding-top: 10px;
  }
`;

export const EndDate = styled.div`
  width: 100%;
  margin-bottom: 20px;
  height: 45px;
  padding: 0 10px;
  border-radius: 4px;
  border: 1px solid #ddd;
  color: #999;
  background: #eee;
  font-size: 16px;

  span {
    color: #999;
    padding-top: 10px;
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
