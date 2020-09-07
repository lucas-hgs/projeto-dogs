import React from 'react'

import { Photo } from './styles';

const index = ({ photo }) => {
  return (
    <Photo>
      <img src={photo.src} alt={photo.title} />
      <span>{photo.acessos}</span>
    </Photo>
  )
}

export default index
