import React, { useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Header from '../../components/Header';
import TimeLineItem from '../../components/TimelineItem';
import PedidoItem from '../../components/PedidoItem';
import { LinearGradient } from 'expo-linear-gradient';
import PrimaryButton from '../../components/PrimaryButton';
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
  PriceCancelamentoContainer,
  IniciarServicoContainer,
  CodeBackground,
  CodeLabel,
  HorizontalSpace,
  CloseModalContainer
} from './styles';


export default function Pedidos() {
  const navigation = useNavigation();
  const [visibleModalPendente, setvisibleModalPendente] = useState(false);
  const [visibleModalAtivo, setvisibleModalAtivo] = useState(false);
  const [showCancelamento, setShowCancelamento] = useState(false);
  const [visibleModalStartService, setvisibleModalStartService] = useState(false);
  
  const dataItens = [
    {
      id: 1,
      image: 'url_da_imagem_1',
      nome: 'Sophia',
      cidade: 'Lisboa',
      distancia: '5 km',
      horario: '10:00',
      status: 'Agendado',
      dataAtendimento: '18 Jan',  
    },
    {
      id: 2,
      image: 'url_da_imagem_2',
      nome: 'Liam',
      cidade: 'Porto',
      distancia: '12 km',
      horario: '13:30',
      status: 'Agendado',
      dataAtendimento: '19 Jan',  
    },
    {
      id: 3,
      image: 'url_da_imagem_3',
      nome: 'Isabella',
      cidade: 'Braga',
      distancia: '8 km',
      horario: '16:00',
      status: 'Pendente',
      dataAtendimento: '20 Jan',  
    },
    {
      id: 4,
      image: 'url_da_imagem_4',
      nome: 'Noah',
      cidade: 'Coimbra',
      distancia: '3 km',
      horario: '09:45',
      status: 'Agendado',
      dataAtendimento: '21 Jan',  
    },
    {
      id: 5,
      image: 'url_da_imagem_5',
      nome: 'Olivia',
      cidade: 'Faro',
      distancia: '20 km',
      horario: '11:20',
      status: 'Pendente',
      dataAtendimento: '02 Fev',  
    },
    {
      id: 6,
      image: 'url_da_imagem_6',
      nome: 'Elijah',
      cidade: 'Évora',
      distancia: '15 km',
      horario: '14:45',
      status: 'Agendado',
      dataAtendimento: '03 Fev',  
    },
    {
      id: 7,
      image: 'url_da_imagem_7',
      nome: 'Ava',
      cidade: 'Aveiro',
      distancia: '6 km',
      horario: '18:30',
      status: 'Agendado',
      dataAtendimento: '04 Fev',  
    },
    {
      id: 8,
      image: 'url_da_imagem_8',
      nome: 'William',
      cidade: 'Guimarães',
      distancia: '25 km',
      horario: '12:00',
      status: 'Agendado',
      dataAtendimento: '03 Mar',  
    },
    {
      id: 9,
      image: 'url_da_imagem_9',
      nome: 'Amelia',
      cidade: 'Setúbal',
      distancia: '10 km',
      horario: '17:15',
      status: 'Agendado',
      dataAtendimento: '18 Mar', 
    },
    {
      id: 10,
      image: 'url_da_imagem_10',
      nome: 'James',
      cidade: 'Funchal',
      distancia: '18 km',
      horario: '19:00',
      status: 'Agendado',
      dataAtendimento: '13 Abr', 
    },
  ];

  const serviceCode = "692410";  
  const openModal = () => {
    setvisibleModalPendente(true);
  };

  const openModalAtivo = () => {
    setvisibleModalAtivo(true);
  };

  const openModalStartService = () => {
    setvisibleModalStartService(true);
  };

  const closeModal = () => {
    setvisibleModalPendente(false);
    setvisibleModalAtivo(false);
    setvisibleModalPendente(false);
    setvisibleModalStartService(false);
    setShowCancelamento(false);
  };

  const closeModalStartService = () => {
    setvisibleModalStartService(false);
  }

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
            renderItem={() => <TimeLineItem openModalAtivo={openModalAtivo}/>}
   
          />
        </TimeLineContainer>
      </LinearGradient>
      <ListHeader>
        <Text variant="titleMedium">Pedidos</Text>
      </ListHeader>
      <ListPedidos
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        data={dataItens}
        renderItem={({ item }) => (
          <PedidoItem
            data={item}
            navigatePage={() => navigatePedidoPage(item)}
            openModal={openModal}
          />
        )}
        keyExtractor={(item) => String(item.id)}
      />

      <Modal
        visible={visibleModalPendente}
        animationType="slide"
        transparent={true}
      > 
        <ModalContainer onPressOut={closeModal}>
          <ModalContent>
            <ModalButtonContainer onPressOut={closeModal} >
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
      
      <Modal
        visible={visibleModalAtivo}
        animationType="slide"
        onRequestClose={closeModal}
        transparent={true}
      >
        <ModalContainer onPressOut={closeModal}>
          <ModalContent>
            <ModalButtonContainer onPress={closeModal}>
              <Ionicons name="remove-outline" size={30} color={"black"} />
            </ModalButtonContainer>
            <ModalOption>
              <Text variant="titleMedium">Ver Serviço</Text>
            </ModalOption>
            <ModalOption onPress={openModalStartService}>
              <Text variant="titleMedium">Ver Codigo de Serviço</Text>
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

      <Modal
        visible={visibleModalStartService}
        animationType="slide"
        onRequestClose={closeModal}
        transparent={true}
      >
        <ModalContainer onPressOut={closeModal}>
          <ModalContent>
            <ModalButtonContainer onPress={closeModalStartService}>
              <Ionicons name="remove-outline" size={30} color={"black"} />
            </ModalButtonContainer>
            <ModalOption>
              <Text variant="titleMedium">Iniciar Serviço</Text>
            </ModalOption>
            <IniciarServicoContainer>
            {serviceCode.split('').map((digit, index) => (
          <CodeBackground key={index}>
            <CodeLabel>{digit}</CodeLabel>
          </CodeBackground>
        ))}
            </IniciarServicoContainer>
            <PrimaryButton  label="Iniciar" hasBackground={true} onPress={() => closeModalStartService()} />
            <HorizontalSpace></HorizontalSpace>
          </ModalContent>
        </ModalContainer>
      </Modal>
    </Container>
  );
}
