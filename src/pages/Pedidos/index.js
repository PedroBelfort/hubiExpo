import * as React from 'react';
import { ScrollView } from 'react-native';
import { Banner, Text  } from 'react-native-paper';
import {LinearGradient} from 'expo-linear-gradient';
import Header from '../../components/Header';
import TimeLineItem from '../../components/TimelineItem';
import PedidoItem from '../../components/PedidoItem';
import {
  Container,
  Timeline,
  TimeLineContainer,
  Title,
  ListHeader,
  ListPedidos,
} from './styles';

export default function Pedidos({ navigation }) {
  const [visible, setVisible] = React.useState(true);

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
          renderItem={() => <PedidoItem />}
        />
      </Container>

  );
}
