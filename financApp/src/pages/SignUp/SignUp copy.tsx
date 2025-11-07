// Do professor
import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

import { 
  Background,
  Container,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText
 } from '../SignIn/styles';

import { useAuth } from '../../contexts/auth';

type SignUpProps = Record<string, never>;
type SignUpState = Record<string, never>;

export default class SignUp extends React.Component<SignUpProps, SignUpState> {
  render() {
    function handleSignUp() {
      console.log("Usuário cadastrado");
    }

    return (
      <Background>
        <Container>
          <AreaInput>
            <Input
              placeholder="Nome"
            />
          </AreaInput>
     
          <AreaInput>
            <Input
               placeholder="Seu email"
            />
          </AreaInput>

          <AreaInput>
            <Input
               placeholder="Sua senha"
            />
          </AreaInput>
          <AreaInput>
            <Input
               placeholder="Confirmação de senha"
            />
          </AreaInput>
          <SubmitButton activeOpacity={0.8} onPress={() => { /* TODO: autenticar */ }}>
            <SubmitText>Cadastrar</SubmitText>
          </SubmitButton>
                         </Container>
             </Background>
    );
  }
}