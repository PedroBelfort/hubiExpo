import React from 'react'
import {AvatarContainer,AvatarImage} from './styles'

export default function Avatar ({source}) {
  return (
    <AvatarContainer>
    <AvatarImage source={source} />
  </AvatarContainer>
  )
}