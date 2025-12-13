import React, { useState } from 'react';
import { Platform, ActivityIndicator } from 'react-native';

import {
  Background,
  Container,
  Logo,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
  Link,
  LinkText
} from './styles';

import { useNavigation } from '@react-navigation/native';

import { useAuth } from '../../hooks/useAuth'

export default function SignIn() {
  const navigation = useNavigation();
  const { signIn, loadingAuth } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
  async function handleLogin() {
    if (email === '' || password === '') {
      alert('Preencha todos os campos');
      return;
    }
    if (password.length < 6) {
      alert('A senha deve ter no mínimo 6 caracteres');
      return;
    }
    await signIn(email, password);
  }

  return (
    <Background>

      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
      >
        <Logo
          source={require('../../assets/Logo.png')}
        />

        <AreaInput>
          <Input
            placeholder="Seu email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Sua senha"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
          />
        </AreaInput>

        <SubmitButton activeOpacity={0.8} onPress={handleLogin}>
          {
            loadingAuth ? (
              <ActivityIndicator size={20} color="#FFF" />
            ) : (
              <SubmitText>Acessar</SubmitText>
            )
          }
        </SubmitButton>

        <Link onPress={() => navigation.navigate('SignUp')}>
          <LinkText>Criar uma conta!</LinkText>
        </Link>

      </Container>

    </Background>
  )
}