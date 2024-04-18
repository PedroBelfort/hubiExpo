import { View, Text } from 'react-native'
import React from 'react'
import {
        BackGroundAzul,
        LabelAzul,
        BackGroundAmarelo,
        LabelAmarelo,
        BackGroundVerde,
        LabelVerde,
        BackGroundAtivo,
        LabelAtivo
    } from './styles';

export default function Status({status}) {
  
    if(status == "Concluido")
    return (
    <BackGroundAzul>
      <LabelAzul>{status}</LabelAzul>
    </BackGroundAzul>
  )
  if(status == "Pendente")
  return (
  <BackGroundAmarelo>
    <LabelAmarelo>{status}</LabelAmarelo>
  </BackGroundAmarelo>
)

if(status == "Agendado")
return (
<BackGroundVerde>
  <LabelVerde>{status}</LabelVerde>
</BackGroundVerde>
)

if(status == "Ativo")
return (
<BackGroundAtivo>
  <LabelAtivo>{status}</LabelAtivo>
</BackGroundAtivo>
)
}