import React, { useRef, useCallback } from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import { Container, Content, AnimationContainer, Background } from './styles';

import logoImg from '../../assets/receita.svg';

interface SignInFormData {
  login: string;
  senha: string;
}

const SignIn: React.FC = () => {
  
  const history = useHistory();

  const { signIn } = useAuth();
  function handleSubmit(data: any) {
    try{
      console.log(data);
      console.log(data.login)
      signIn({
        login: data.login,
        senha: data.senha,
      });

      
      history.push('/dashboard');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        console.log(err)
        console.log('erro login')
      }
    }
  }



  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="Receitas" />

          <Form  onSubmit={handleSubmit}>
            <h1>Faça seu login e acesse suas receitas!</h1>

            <Input name="login"  placeholder="login" />

            <Input
              name="senha"
              type="password"
              placeholder="Senha"
            />

            <button type="submit">Entrar</button>
          </Form>

          <Link to="/signup">
            Criar conta
          </Link>
        </AnimationContainer>
      </Content>

    </Container>
  );
};

export default SignIn;
