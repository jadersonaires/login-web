import React from 'react';
import Input from '../../components/Input';
import Button from '../../components/Buttom';
import { Container, Content, Background, Forgot } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Background />
      <Content>
        <form>
          <span>Welcome back</span>
          <h1>Login to your account</h1>

          <Input
            description="Email"
            name="email"
            type="text"
            placeholder="John.snow@gmail.com"
          />
          <Input
            description="Password"
            name="password"
            type="password"
            placeholder="*****"
          />

          <Forgot>
            <a href="/">Forgot password?</a>
          </Forgot>

          <Button type="submit">Login now</Button>
        </form>
      </Content>
    </Container>
  );
};

export default SignIn;
