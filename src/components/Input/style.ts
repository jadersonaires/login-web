import styled from 'styled-components';

export const Conteiner = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  & + div {
    margin-top: 16px;
  }

  input {
    flex: 1;
    border: 1px solid #e8e8e8;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 14px;

    &::placeholder {
      color: #666360;
    }
  }
`;

export const Label = styled.div`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 5px;
`;
