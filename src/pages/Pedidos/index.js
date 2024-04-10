import React, { useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Header from '../../components/Header';
import TimeLineItem from '../../components/TimelineItem';
import PedidoItem from '../../components/PedidoItem';
import { LinearGradient } from 'expo-linear-gradient';
import {
  Container,
  Timeline,
  TimeLineContainer,
  Title,
  ListHeader,
  ListPedidos,
  ModalContainer,
  ModalContent,
  ModalButtonContainer,
  ModalOption,
  OptionCancelar,
  CancelamentoContainer,
  LabelOption,
  TitleCancelamentoContainer,
  AlertaCancelamento,
  LabelCancelamento,
  PriceCancelamentoContainer
} from './styles';



export default function Pedidos() {
  const navigation = useNavigation();
  const [visibleModal, setVisibleModal] = useState(false);
  const [pedidoDetails, setPedidoDetails] = useState(null);
  const [showCancelamento, setShowCancelamento] = useState(false);

  const openModal = (details) => {
    setPedidoDetails(details);
    setVisibleModal(true);
  };

  const closeModal = () => {
    setPedidoDetails(null);
    setVisibleModal(false);
  };

  function navigatePedidoPage(item) {
    navigation.navigate('Pedido', { id: item });
  }

  return (
    <Container>
      <LinearGradient
        colors={['#009581', '#038F87', '#2554BD']}
        style={{ flex: 0.8, margin: 0 }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}>
        <Header />
        <TimeLineContainer>
          <Title>Hoje</Title>
          <Timeline
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={[1, 2, 3, 4, 5]}
            renderItem={() => <TimeLineItem />}
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
          <PedidoItem
            data={item}
            navigatePage={() => navigatePedidoPage(item)}
            openModal={openModal}
          />
        )}
        keyExtractor={(item) => String(item)}
      />

      <Modal
        visible={visibleModal}
        animationType="slide"
        onRequestClose={closeModal}
        transparent={true}
      >
        <ModalContainer>
          <ModalContent>
            <ModalButtonContainer onPress={closeModal}>
              <Ionicons name="remove-outline" size={30} color={"black"} />
            </ModalButtonContainer>
            <ModalOption>
              <Text variant="titleMedium">Ver Serviço</Text>
            </ModalOption>

          

            {showCancelamento && (
              <CancelamentoContainer>
                <TitleCancelamentoContainer>
                  <LabelOption>Política de Cancelamento</LabelOption>
                </TitleCancelamentoContainer>
                <AlertaCancelamento>
                  <Ionicons name="alert-circle" size={28} color={"#CF5472"} />
                  <LabelCancelamento>
                    <Text variant="bodyMedium">Cancelamento: Faltam menos de 24 horas para a realização do serviço. A taxa de serviço será cobrada para cobertura dos custos de reembolso do cliente.</Text>
                  </LabelCancelamento>
                </AlertaCancelamento>
                <PriceCancelamentoContainer>
                  <Text>Total:</Text>
                  <Text>$1,80</Text>
                  <Text onPress={() => setShowCancelamento(false)} >Não Cancelar</Text>
                </PriceCancelamentoContainer>
              </CancelamentoContainer>
            )}
            <ModalOption onPress={() => setShowCancelamento(true)}>
              <Ionicons name="trash" size={16} color={"#CF5472"} />
              <OptionCancelar variant="titleMedium">Cancelar Serviço</OptionCancelar>
            </ModalOption>
          </ModalContent>
        </ModalContainer>
      </Modal>
    </Container>
  );
}
