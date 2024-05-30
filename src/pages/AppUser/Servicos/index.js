import {Container, ContentContainer,Subtitle,SubTitleContainer,AlertContainer,AlertText} from './styles'
import { Ionicons } from "@expo/vector-icons";

export default function Servicos() {

  /*
  const [data, setData] = useState([
    { id: '1', text: 'Item 1', checked: false },
    { id: '2', text: 'Item 2', checked: false },
    { id: '3', text: 'Item 3', checked: false },
  ]);


  const handleCheckboxChange = (itemId) => {
    const newData = data.map(item =>
      item.id === itemId ? { ...item, checked: !item.checked } : item
    );
    setData(newData);
  };

     <CheckBox
        style={styles.checkbox}
        isChecked={item.checked}
        onClick={() => handleCheckboxChange(item.id)}
      />

       <Text style={styles.text}>{item.text}</Text>
  */

  return (
    <Container>
      <ContentContainer>
        <SubTitleContainer>
        <Subtitle>
         Serviços Pretendidos
        </Subtitle>
        </SubTitleContainer>
        <AlertContainer>
        <Ionicons name="alert-circle" size={28} color={"#283A99"} />
             <AlertText>
             Tenha em consideração que o Cuidador estará limitado no tempo e algumas tarefas poderão demorar mais do que o suposto.
             </AlertText>
        </AlertContainer>
     
     
      </ContentContainer>
    </Container>
  )
}