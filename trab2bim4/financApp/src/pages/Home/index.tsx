import React, { useEffect, useState } from 'react';
import { Modal, TouchableOpacity } from 'react-native';


import {
  Area,
  Background,
  List,
  ListBalance,
  Title
} from './styles';

import { format } from 'date-fns';
import api from '../../services/api';

import { useIsFocused } from '@react-navigation/native';
import BalanceItem from '../../components/BalanceItem';
import CalendarModal from '../../components/CalendarModal';
import HistoricoList from '../../components/HistoricoList';
import { Balance, Movement } from '../../types';

import Icon from 'react-native-vector-icons/MaterialIcons';


export default function Home() {
  const isFocused = useIsFocused();
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


    </Background>
  )
}