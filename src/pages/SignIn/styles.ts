import styled from 'styled-components';
import { shade } from 'polished';
import backgroundSignin from '../../assets/background-signin.jpg';

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px; // calc(100% / 2);

  form {
    width: 350px;

    h1 {
      font-size: 30px;
      margin-bottom: 24px;
    }
  }
`;

export const Background = styled.div`
  background: url(${backgroundSignin}) no-repeat center;
  background-size: cover;
  flex: 1;
`;

export const Forgot = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;
  text-align: right;

  a {
    color: #2c5282;
    font-size: 14px;
    font-weight: 400;
    display: inline-block;
    width: 100%;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#2c5282')};
    }
  }
`;
