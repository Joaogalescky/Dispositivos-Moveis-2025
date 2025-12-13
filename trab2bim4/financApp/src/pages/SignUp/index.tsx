import React, { useState } from 'react';
import { Platform, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  Background,
  Container,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText
} from '../SignIn/styles';

import { useAuth } from '../../hooks/useAuth';

export default function SignUp() {
  const { signUp, loadingAuth } = useAuth();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const navigation = useNavigation();

  function validateEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  async function handleSignUp() {
    if (nome === '' || email === '' || password === '') {
      alert('Preencha todos os campos');
      return; 
    }
    if (!validateEmail(email)) {
      alert('Digite um email válido');
      return;
    }
    if (password.length < 6) {
      alert('A senha deve ter no mínimo 6 caracteres');
      return;
    }
    if (password !== confirm) {
      alert('Senhas não coincidem');
      return;
    }
    await signUp(email, password, nome);
  }

  return (
    <Background>
      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
      >
        <AreaInput>
          <Input
            placeholder="Nome"
            value={nome}
            onChangeText={(text) => setNome(text)}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Seu email"
            value={email}
            autoCapitalize="none"
            keyboardType="email-address"
            onChangeText={(text) => setEmail(text)}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Sua senha"
            value={password}
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Confirmação de senha"
            value={confirm}
            secureTextEntry
            onChangeText={(text) => setConfirm(text)}
          />
        </AreaInput>

        <SubmitButton activeOpacity={0.8} onPress={handleSignUp}>
          {
            loadingAuth ? (
              <ActivityIndicator size={20} color="#FFF" />
            ) : (
              <SubmitText>Cadastrar</SubmitText>
            )
          }
        </SubmitButton>
      </Container>
    </Background>
  );
}