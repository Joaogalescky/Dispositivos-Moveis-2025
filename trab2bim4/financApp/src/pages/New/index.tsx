import React, { useState } from 'react';

import { Background, Input, SubmitButton, SubmitText } from './styles';
import { SafeAreaView, Pressable, Keyboard, Alert } from 'react-native';

import RegisterTypes from '../../components/RegisterTypes';

import api from '../../services/api';
import { format } from 'date-fns';
import { useNavigation } from '@react-navigation/native';

export default function New() {
  const navigation = useNavigation();

  const [labelInput, setLabelInput] = useState('');
  const [valueInput, setValueInput] = useState('');
  const [type, setType] = useState<'receita' | 'despesa'>('receita');

  function handleSubmit() {
    Keyboard.dismiss();

    if (labelInput === '' || valueInput === '') {
      alert('Preencha todos os campos');
      return;
    }

    if (valueInput === '' || parseFloat(valueInput) <= 0) {
      alert('Digite um valor maior que zero');
      return;
    }
    handleAdd();
  }


  async function handleAdd() {
    Keyboard.dismiss();

    try {
      await api.post('/receive', {
        description: labelInput,
        value: Math.abs(Number(valueInput)),
        type: type,
        date: format(new Date(), 'dd/MM/yyyy')
      });

      setLabelInput('');
      setValueInput('');
      alert('Transação registrada com sucesso!');
      navigation.navigate('Home');
    } catch (err: any) {
      alert('Erro ao registrar transação');
    }
  }

  return (
    <Pressable onPress={() => Keyboard.dismiss()} style={{ flex: 1 }}>
      <Background>
        <SafeAreaView style={{ marginTop: 14, alignItems: 'center' }}>
          <Input
            placeholder="Descrição desse registro"
            value={labelInput}
            onChangeText={(text) => setLabelInput(text)}
          />

          <Input
            placeholder="Valor desejado"
            keyboardType="numeric"
            value={valueInput}
            onChangeText={(text) => {
              let numericValue = text.replace(/,/g, '.').replace(/[^0-9.]/g, '');
              const parts = numericValue.split('.');
              const filteredValue = parts.length > 2 ? parts[0] + '.' + parts.slice(1).join('') : numericValue;
              setValueInput(filteredValue);
            }}
          />

          <RegisterTypes type={type} sendTypeChanged={(item) => setType(item)} />

          <SubmitButton onPress={handleSubmit}>
            <SubmitText>Registrar</SubmitText>
          </SubmitButton>

        </SafeAreaView>
      </Background>
    </Pressable>
  )
}