import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #04c35c;
  height: 50px;
  border-radius: 5px;
  border: 0;
  padding: 0 16px;
  color: #fff;
  width: 100%;
  font-weight: 500;
  margin-top: 8px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#04C35C')};
  }
`;
