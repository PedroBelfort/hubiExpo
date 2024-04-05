import styled from 'styled-components/native';

export const Container = styled.View`
flex: 1;
background-color: #FFFFFF;
`;
export const Detalhes = styled.View`
  height: 110px;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  background-color: rgba(240, 240, 240, 0.0);
`;

export const ServicosSolicitados = styled.View`
  height: auto;
  flex-direction: column;
  background-color: rgba(240, 240, 240, 0.0);
  padding-left: 14px;
  padding-bottom: 14px;
`;


export const ContainerDadosPessoais = styled.View`
  height: auto;
  flex-direction: column;
  background-color: rgba(240, 240, 240, 0.0);
  padding-left: 14px;
  padding-bottom: 14px;
`;

export const ContainerButtons = styled.View`
  height: 170px;
  flex-direction: column;
  background-color: transparent;
  padding: 14px;
  justify-content: space-between;
`;

export const PedidoHeader = styled.View`
height: 70px;
flex-direction: row;
align-items: center;
padding-left: 14px;
border-bottom-width: 1px;
border-bottom-color: #E0E0E0;
`;

export const Labels = styled.View`
 width:231px;
 height: 95px;
 margin-left: 12px;
 align-items: flex-start;
`;

export const LabelAlerta = styled.View`
 margin:12px;
 color: #A26305 ;
`;

export const AlertaStatus = styled.View`
  height: 90px;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  border-radius: 8px;
  background-color: rgba(240, 240, 240, 0.0);
  border-bottom-width: 1px;
  border-bottom-color: #E0E0E0;
  background-color: #FAF1E0;
  margin: 10px;
  justify-content: space-around;
`;

export const Title = styled.Text`
width: auto;
padding-top:7px;
padding-bottom:8px;
font-size: 18px;
font-weight: 700;
color: black;
padding-right: 14px;
`;

export const LabelRegular = styled.Text`
width: auto;
font-size: 14px;
font-weight: 500;
color: black;
padding-right: 14px;
`; 