import React, { useCallback} from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import {api} from '../../services/api';



import { Container, Content, AnimationContainer } from './styles';

import logoImg from '../../assets/cover.svg';

interface SignUpFormData {
  nome: string;
  login: string;
  senha: string;
}

const SignUp: React.FC = () => {

  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: any) => {
      try {
        //formRef.current?.setErrors({});

        console.log(data)
        await api.post('/usuarios', data);

        history.push('/');

      } catch (err) {
        if (err instanceof Yup.ValidationError) {
         
          //formRef.current?.setErrors(errors);
          return;
        }


      }
    },
    [ history]
  );

  return (
    <Container>
         <img src={logoImg} alt="Receitas" />
      <Content>
        <AnimationContainer>
 
          <Form onSubmit={handleSubmit}>
            <h1>Faça seu cadastro</h1>

            <Input  type="text" name="nome" placeholder="Nome" />

            <Input  type="text" name="login"  placeholder="login" />

            <Input
              name="senha"
              type="password"
              placeholder="Senha"
            />

            <button type="submit">Cadastrar</button>
          </Form>

          <Link to="/">
            Voltar para logon
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignUp;