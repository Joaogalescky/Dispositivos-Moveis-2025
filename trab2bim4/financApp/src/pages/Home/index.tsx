import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useAuth } from '../../hooks/useAuth'

import {
  Background,
  ListBalance,
  Area,
  Title,
  List
} from './styles';

import api from '../../services/api'
import { format } from 'date-fns';

import { useIsFocused } from '@react-navigation/native';
import BalanceItem from '../../components/BalanceItem';
import HistoricoList from '../../components/HistoricoList';
import CalendarModal from '../../components/CalendarModal';
import { Balance, Movement } from '../../types';

import Icon from 'react-native-vector-icons/MaterialIcons'


export default function Home() {
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const [listBalance, setListBalance] = useState<Balance[]>([]);
  const [movements, setMovements] = useState<Movement[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  const [dateMovements, setDateMovements] = useState(new Date())


  useEffect(() => {
    let isActive = true;

    async function getMovements() {

      let date = new Date(dateMovements)
      let onlyDate = date.valueOf() + date.getTimezoneOffset() * 60 * 1000;
      let dateFormated = format(onlyDate, 'dd/MM/yyyy');

      const receives = await api.get('/receives', {
        params: {
          date: dateFormated
        }
      })

      const balance = await api.get('/balance', {
        params: {
          date: dateFormated
        }
      })

      if (isActive) {
        setMovements(receives.data)
        setListBalance(balance.data);
      }
    }

    getMovements();

    return () => isActive = false;

  }, [isFocused, dateMovements])


  async function handleDelete(id) {
    try {
      await api.delete('/receives/delete', {
        params: {
          item_id: id
        }
      })

      setDateMovements(new Date())
    } catch (err) {
      console.log(err);
    }
  }

  function filterDateMovements(dateSelected) {
    // console.log(dateSelected);
    setDateMovements(dateSelected);
  }


  return (
    <Background>

      <ListBalance
        data={listBalance}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.tag}
        renderItem={({ item }) => (<BalanceItem data={item} />)}
      />

      <Area>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Icon name="event" color="#121212" size={30} />
        </TouchableOpacity>
        <Title>Ultimas movimentações</Title>
        <TouchableOpacity
          onPress={() => navigation.navigate('Perfil')}
          style={{ marginLeft: 'auto' }}
        >
          <Icon name="person" color="#121212" size={30} />
        </TouchableOpacity>
      </Area>

      <List
        data={movements}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <HistoricoList data={item} deleteItem={handleDelete} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <CalendarModal
          setVisible={() => setModalVisible(false)}
          handleFilter={filterDateMovements}
        />
      </Modal>

      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 30,
          right: 30,
          backgroundColor: '#3b3dbf',
          width: 60,
          height: 60,
          borderRadius: 30,
          justifyContent: 'center',
          alignItems: 'center',
          elevation: 5,
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
        }}
        onPress={() => navigation.navigate('Registrar')}
      >
        <Icon name="add" color="#FFF" size={30} />
      </TouchableOpacity>

    </Background>
  )
}