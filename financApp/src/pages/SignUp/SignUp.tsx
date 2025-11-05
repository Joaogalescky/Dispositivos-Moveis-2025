import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  Background,
  Container,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
  Link,
  LinkText,
  ErrorText,
} from './styles';

type NavigationProps = {
  navigate: (screen: string) => void;
};

export default function SignUp() {
  const navigation = useNavigation<NavigationProps>();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const validateField = (field: string, value: string) => {
    const newErrors = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    };

    switch (field) {
      case 'name':
        newErrors.name =
          value.trim().length < 3 ? 'O nome deve ter pelo menos 3 caracteres' : '';
        break;

      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        newErrors.email = !emailRegex.test(value) ? 'Digite um e-mail válido' : '';
        break;

      case 'password':
        newErrors.password =
          value.length < 6 ? 'A senha deve ter pelo menos 6 caracteres' : '';
        if (confirmPassword && confirmPassword !== value) {
          newErrors.confirmPassword = 'As senhas não coincidem';
        } else {
          newErrors.confirmPassword = '';
        }
        break;

      case 'confirmPassword':
        newErrors.confirmPassword =
          value !== password ? 'As senhas não coincidem' : '';
        break;
    }
    setErrors(newErrors);
  };

  const handleSignUp = () => {
    if (!isFormValid) {
      Alert.alert('Atenção', 'Verifique os campos antes de continuar');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
      navigation.navigate('SignIn');
    }, 1500);
  };

  const isFormValid =
    name.trim().length >= 3 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    email.includes('@') &&
    password.length >= 6 &&
    password === confirmPassword;

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <Background>
        <Container>
          {errors.name ? <ErrorText>{errors.name}</ErrorText> : null}
          <AreaInput>
            <Input
              placeholder="Nome"
              autoCapitalize="words"
              value={name}
              autoCorrect={false}
              returnKeyType="next"
              onChangeText={(text) => {
                setName(text);
                validateField('name', text);
              }}
            />
          </AreaInput>

          {errors.email ? <ErrorText>{errors.email}</ErrorText> : null}
          <AreaInput>
            <Input
              placeholder="Seu email"
              autoCapitalize="none"
              value={email}
              autoCorrect={false}
              keyboardType="email-address"
              returnKeyType="next"
              onChangeText={(text) => {
                setEmail(text);
                validateField('email', text);
              }}
            />
          </AreaInput>
            
          {errors.password ? <ErrorText>{errors.password}</ErrorText> : null}
          <AreaInput>
            <Input
              placeholder="Sua senha"
              secureTextEntry
              value={password}
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="go"
              onChangeText={(text) => {
                setPassword(text);
                validateField('password', text);
              }}
            />
          </AreaInput>
          
          {errors.confirmPassword ? (<ErrorText>{errors.confirmPassword}</ErrorText>) : null}
          <AreaInput>
            <Input
              placeholder="Confirme sua senha"
              secureTextEntry
              value={confirmPassword}
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="go"              
              onChangeText={(text) => {
                setConfirmPassword(text);
                validateField('confirmPassword', text);
              }}
            />
          </AreaInput>

          <SubmitButton
            activeOpacity={0.8}
            disabled={!isFormValid || loading}
            onPress={handleSignUp}
          >
            <SubmitText >{loading ? 'Cadastrando...' : 'Cadastrar'}</SubmitText>
          </SubmitButton>

          <Link onPress={() => navigation.navigate('SignIn')}>
            <LinkText>Já tem uma conta? Entrar</LinkText>
          </Link>
        </Container>
      </Background>
    </KeyboardAvoidingView>
  );
}