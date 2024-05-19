import { Container,OptionContainer,LabelTitle , LabelValue,Labels, ViewContainer } from './styles'; 
import {  Chip, Avatar, Divider,Button,IconButton } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';

import React from 'react'

export default function Documentos() {

    const navigation = useNavigation();

  return (
    <Container>
         <OptionContainer>
          <Labels>
          <LabelTitle>Documento de Identificação</LabelTitle>
          <LabelValue>******** 3AX4</LabelValue>
          <LabelValue>Válido até 02/08/2031</LabelValue>
          </Labels>
          <IconButton
      icon={({ color, size }) => (
        <Ionicons name="chevron-forward-outline" size={18} color={"black"} />
      )}
    />
         </OptionContainer>

         <Divider />

         <OptionContainer>
          <Labels>
          <LabelTitle>Certificado do Registro Criminal</LabelTitle>
          <LabelValue>NºXHHHRG</LabelValue>
          <LabelValue>Data de Emissão</LabelValue>
          <LabelValue>Este documento tem a validade de 90 dias</LabelValue>
          <LabelValue>******** 3AX4</LabelValue>
          <LabelValue>Válido até 02/08/2031</LabelValue>
          </Labels>
          <IconButton
      icon={({ color, size }) => (
        <Ionicons name="chevron-forward-outline" size={18} color={"black"} />
      )}
    />

         </OptionContainer>
         <Divider />
         <OptionContainer>
          <Labels>
          <LabelTitle>Certificado de Robustez Física</LabelTitle>
          <LabelTitle>e Psíquica</LabelTitle>
          <LabelValue>Data de Emissão</LabelValue>
          </Labels>
          <IconButton
      icon={({ color, size }) => (
        <Ionicons name="chevron-forward-outline" size={18} color={"black"} />
      )}
    />
         </OptionContainer>
         <Divider />

         <OptionContainer>
          <Labels>
          <LabelTitle>Seguro de Acidentes Pessoais</LabelTitle>
          <LabelValue>Sistema de Saúde Multicare - Fidelidade</LabelValue> 
          <LabelValue>Apólice nº X77DG</LabelValue>
          </Labels>
          <IconButton
      icon={({ color, size }) => (
        <Ionicons name="chevron-forward-outline" size={18} color={"black"} />
      )}
    />

         </OptionContainer>
         <Divider />
         <OptionContainer>
          <Labels>
          <LabelTitle>Seguro de Acidentes de Trabalho</LabelTitle>
          <LabelValue>Sistema de Saúde Multicare - Fidelidade</LabelValue> 
          <LabelValue>Apólice nº X77DG</LabelValue>
          </Labels>
          <IconButton
      icon={({ color, size }) => (
        <Ionicons name="chevron-forward-outline" size={18} color={"black"} />
      )}
    />

         </OptionContainer>

         <Divider />

         <OptionContainer>
          <Labels>
          <LabelTitle>Declaração de Atividade</LabelTitle>
          <LabelValue>Data de submissão </LabelValue> 
          <LabelValue>Validade</LabelValue>
          </Labels>
          <IconButton
      icon={({ color, size }) => (
        <Ionicons name="chevron-forward-outline" size={18} color={"black"} />
      )}
    />

         </OptionContainer>



    </Container>
  )
}