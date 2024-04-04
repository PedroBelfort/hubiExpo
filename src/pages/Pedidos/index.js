import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '../../components/Header'
import {Container, Timeline,TimeLineContainer,Title, ListHeader, ListPedidos} from './styles'
import TimeLineItem from '../../components/TimelineItem';
import PedidoItem from '../../components/PedidoItem';
import { ScrollView } from 'react-native';
import { Banner, Text  } from 'react-native-paper';


export default function Pedidos({ navigation }) {

 const [visible, setVisible] = React.useState(true);

  return (
    <Container>
    <Header></Header>
    <TimeLineContainer>
    <Title>Hoje</Title>
    <Timeline 
     horizontal={true}
     showsHorizontalScrollIndicator={false}
     data={[1,2,3,4,5]}
     renderItem={()=> <TimeLineItem/>}
    />
    </TimeLineContainer>
     <ListHeader>
     <Text variant="titleMedium">Pedidos</Text>
     </ListHeader>

     <ListPedidos 
      horizontal={false}
      showsHorizontalScrollIndicator={false}
      data={[1,2,3,4,5,7,8,9,10]}
      renderItem={()=> <PedidoItem/>} />
    </Container>
    
  );
}


