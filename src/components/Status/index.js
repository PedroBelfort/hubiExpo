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
  
    if(status == "concluido")
    return (
    <BackGroundAzul>
      <LabelAzul>{status}</LabelAzul>
    </BackGroundAzul>
  )
  if(status == "pendente")
  return (
  <BackGroundAmarelo>
    <LabelAmarelo>{status}</LabelAmarelo>
  </BackGroundAmarelo>
)

if(status == "agendado")
return (
<BackGroundVerde>
  <LabelVerde>{status}</LabelVerde>
</BackGroundVerde>
)

if(status == "ativo")
return (
<BackGroundAtivo>
  <LabelAtivo>{status}</LabelAtivo>
</BackGroundAtivo>
)
}