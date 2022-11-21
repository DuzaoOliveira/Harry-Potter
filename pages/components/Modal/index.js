/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from '../Modal'
import Persongens from './../../personagens/index';


const handleClose = () => {
  window.location.href = "/personagens";
};
const Modal = ({ name, house, species, gender, dateOfBirth, patronus, wand, wood, core, length, ancestry, actor, img


}) => {

  return (
    <div className={styles.modal}>
      <button onClick={handleClose}>X</button>
      <img src={img} />
      <p>Nome:{name}</p>
      <p>Casa:{house}</p>
      <p>Espécie:{species}</p>
      <p>Data de nascimento:{dateOfBirth}</p>
      <p>Gênero:{gender}</p>
      <p>Patrono:{patronus}</p>
      <p>Varinha:{wand}</p>
      <p>-Madeira:{wood}</p>
      <p>-Núcleo:{core}</p>
      <p>-Comprimento:{length}</p>
      <p>Ancestralidade:{ancestry}</p>
      <p>Ator:{actor}</p>
    </div>
  )
}

export default Modal