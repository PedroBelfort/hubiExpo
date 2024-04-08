import React, {useState, useEffect} from "react";
import { Modal, View , Button } from 'react-native';
import { Banner, Text  } from 'react-native-paper';
import {LinearGradient} from 'expo-linear-gradient';
import Header from '../../components/Header';
import TimeLineItem from '../../components/TimelineItem';
import PedidoItem from '../../components/PedidoItem';
import { useNavigation } from "@react-navigation/native"; 

import {
  Container,
  Timeline,
  TimeLineContainer,
  Title,
  ListHeader,
  ListPedidos,
} from './styles';

export default function Pedidos() {

  const navigation = useNavigation();
  const [visibleModal, setVisibleModal] = useState(false);
  const [pedidoDetails, setPedidoDetails] = useState(null);

  const openModal = (details) => {
    setPedidoDetails(details);
    setVisibleModal(true);
  };

  const closeModal = () => {
    setVisibleModal(false);
  };


  function navigatePedidoPage(item){
    navigation.navigate('Pedido',{id:item})
  }

  return (
 
      <Container>
    <LinearGradient
      colors={['#009581', '#038F87','#2554BD']}
      style={{ flex: 0.8 , margin:0}}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}>
        <Header />
        <TimeLineContainer>
          <Title>Hoje</Title>
          <Timeline
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={[1, 2, 3, 4, 5]}
            renderItem={() => <TimeLineItem  />}
          />
        </TimeLineContainer>
        </LinearGradient>
        <ListHeader>
          <Text variant="titleMedium">Pedidos</Text>
        </ListHeader>
        <ListPedidos
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          data={[1, 2, 3, 4, 5, 7, 8, 9, 10]}
          renderItem={({ item }) => (
            <PedidoItem data={item} navigatePage={() => navigatePedidoPage(item)} 
            openModal={openModal} />
          )}
          keyExtractor={(item)=> String(item)}
        />

<Modal
        visible={visibleModal}
        animationType="slide"
        onRequestClose={closeModal}
      >
        {/* Conteúdo do modal com os detalhes do pedido */}
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>{pedidoDetails?.nome}</Text>
          <Text>{pedidoDetails?.local}</Text>
          <Text>{pedidoDetails?.horario}</Text>
          <Text>{pedidoDetails?.status}</Text>
          {/* Botão para fechar o modal */}
          <Button title="Fechar" onPress={closeModal} />
        </View>
      </Modal>
  </Container>


  );
}
