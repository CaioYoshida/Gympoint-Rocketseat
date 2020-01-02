import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);

  .answer {
    display: flex;
    flex-direction: column;

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    border-radius: 4px;
    background: white;
    width: 450px;
    height: auto;

    padding: 30px;
  }

  .title {
    font-size: 14px;
    font-weight: bold;
    color: #444;
    align-self: flex-start;
  }

  p {
    margin-top: 15px;
    margin-bottom: 25px;
    font-size: 16px;
    color: #666;
  }

  #closeButton {
    border: none;
    background: none;
    align-self: flex-end;

    &:hover {
      background: ${darken(0.05, '#fff')};
    }
  }
`;

export const AnswerInput = styled.textarea`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px;
  height: 130px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #ddd;
  margin-top: 15px;
`;

export const SubmitButton = styled.button`
  height: 45px;
  width: 100%;
  margin-top: 20px;

  background: #ee4d64;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${lighten(0.05, '#ee4d64')};
  }
`;
