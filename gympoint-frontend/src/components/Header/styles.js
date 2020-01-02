import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px;
  width: 100%;
  background: #fff;

  > div {
    padding: 0 15px;
    width: 100%;
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    height: 40px;
    padding-right: 30px;
    border-right: 1px solid #dddddd;
    margin-right: 30px;
  }

  div {
    width: 450px;
    display: flex;
    justify-content: space-between;

    > a {
      text-decoration: none;
      font-size: 15px;
      font-weight: bold;
      color: #999;

      &:hover {
        color: #111;
      }
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  > strong {
    font-size: 14px;
  }

  button {
    margin-top: 3px;
    background: none;
    border: none;
    font-size: 14px;
    color: #de3b3b;

    &:hover {
      opacity: 0.7;
    }
  }
`;
