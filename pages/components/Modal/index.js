import React from 'react'
import styles from '../../personagens/styles.module.css'

const handleClose = () => {
  window.location.href = "/personagens";
};
const Modal = ({ name, house, species, gender, dateOfBirth, patronus, wand, wood, core, length, ancestry, actor, img


}) => {

  return (

    <div className={styles.modal}>

      <div className={styles.close}>
        <button onClick={() => handleClose(true)}>X</button>
      </div>


      <img src={img} />

      <div className={styles.caracters}>
        <p>Nome: <span>{name}</span></p>
        <p>Casa:<span>{house}</span></p>
        <p>Espécie:<span>{species}</span></p>
        <p>Data de nasc:<span>{dateOfBirth}</span></p>
        <p>Gênero:<span>{gender}</span></p>
        <p>Patrono:<span>{patronus}</span></p>
        <li>
          <p>Varinha:<span>{wand}</span></p>
          <li>-Madeira:<span>{wood}</span></li>
          <li>-Núcleo:<span>{core}</span></li>
          <li>-Comprimento:<span>{length}</span></li>
        </li>
        <p>Ancestralidade:<span>{ancestry}</span></p>
        <p>Ator:<span>{actor}</span></p>
      </div>
    </div>

  )
}

export default Modal