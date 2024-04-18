import { View, Text } from 'react-native'
import React from 'react'
import {ListPedidos} from './styles'
import PedidoItem from '../../components/PedidoItem';
import { useNavigation } from "@react-navigation/native";

export default function Recibos() {
  const navigation = useNavigation();

  function navigateServicoRealizadoPage() {
    navigation.navigate('ServicoRealizado');
  }

  const dataItens = [
    {
      id: 1,
      image: 'url_da_imagem_1',
      nome: 'Sophia',
      cidade: 'Lisboa',
      distancia: '5 km',
      horario: '10:00',
      status: 'Concluido',
      dataAtendimento: '18 Jan',  
    },
    {
      id: 2,
      image: 'url_da_imagem_2',
      nome: 'Liam',
      cidade: 'Porto',
      distancia: '12 km',
      horario: '13:30',
      status: 'Concluido',
      dataAtendimento: '19 Jan',  
    },
    {
      id: 3,
      image: 'url_da_imagem_3',
      nome: 'Isabella',
      cidade: 'Braga',
      distancia: '8 km',
      horario: '16:00',
      status: 'Concluido',
      dataAtendimento: '20 Jan',  
    },
    {
      id: 4,
      image: 'url_da_imagem_4',
      nome: 'Noah',
      cidade: 'Coimbra',
      distancia: '3 km',
      horario: '09:45',
      status: 'Concluido',
      dataAtendimento: '21 Jan',  
    },
    {
      id: 5,
      image: 'url_da_imagem_5',
      nome: 'Olivia',
      cidade: 'Faro',
      distancia: '20 km',
      horario: '11:20',
      status: 'Concluido',
      dataAtendimento: '02 Fev',  
    },
    {
      id: 6,
      image: 'url_da_imagem_6',
      nome: 'Elijah',
      cidade: 'Évora',
      distancia: '15 km',
      horario: '14:45',
      status: 'Concluido',
      dataAtendimento: '03 Fev',  
    },
    {
      id: 7,
      image: 'url_da_imagem_7',
      nome: 'Ava',
      cidade: 'Aveiro',
      distancia: '6 km',
      horario: '18:30',
      status: 'Concluido',
      dataAtendimento: '04 Fev',  
    },
    {
      id: 8,
      image: 'url_da_imagem_8',
      nome: 'William',
      cidade: 'Guimarães',
      distancia: '25 km',
      horario: '12:00',
      status: 'Concluido',
      dataAtendimento: '03 Mar',  
    },
    {
      id: 9,
      image: 'url_da_imagem_9',
      nome: 'Amelia',
      cidade: 'Setúbal',
      distancia: '10 km',
      horario: '17:15',
      status: 'Concluido',
      dataAtendimento: '18 Mar', 
    },
    {
      id: 10,
      image: 'url_da_imagem_10',
      nome: 'James',
      cidade: 'Funchal',
      distancia: '18 km',
      horario: '19:00',
      status: 'Concluido',
      dataAtendimento: '13 Abr', 
    },
  ];

  return (
    <ListPedidos
    horizontal={false}
    showsHorizontalScrollIndicator={false}
    data={dataItens}
    renderItem={({ item }) => (
      <PedidoItem
       data={item}
       navigatePage={() => navigateServicoRealizadoPage()}/>
    )}/>
  )
}