/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useEffect } from "react";
import Modal from '../components/Modal'
import styles from './styles.module.css';
import axios from "axios";
import Head from 'next/head';

// Modal.setAppElement('#root');

function Persongens() {

  const [resposta, setResposta] = useState();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [personagemAtual, setPersonagemAtual] = useState({});


  useEffect(() => {
    axios
      .get('https://hp-api.herokuapp.com/api/characters')
      .then((response) => {
        setResposta(response.data);
        console.log(resposta, 'resposta')
      });
  }, [resposta]);

  const handleClick = () => {
    window.location.href = "/";
  };

  const escolherPersonagem = (personagem) => {
    setResposta(true);
    axios
      .get(
        `https://hp-api.herokuapp.com/api/characters/${personagem}`,
      )
      .then((response) => {
        setResposta(response?.data.results);
        setIsOpen(true);
      })

  }

  const handleOpenModal = (personagem) => {
    setPersonagemAtual(personagem);
    setIsOpen(true)
  };


  return (

    <div className={styles.container}>

      <Head>
        <title>Harry Potter</title>
        <meta name="description" content="Harry Potter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.topo}>
        <img src='topo.png'></img>
      </div>

      <div className={styles.topo2}>
        <img src="logo_3.png" onClick={handleClick}></img>
      </div>

      <div className={styles.icones}>

        <img src="logo2.png"></img>

        <p>Personagens</p>



        <div className={styles.linha}>
          <img src='topo.png'></img>
        </div>

      </div>

      <div className={styles.boxcard}>

        {resposta?.map((personagens) => {
          return (

            <>
              <div onClick={handleOpenModal}>
                <div className={styles.nome}>
                  <div className={styles.todos}>
                    <img onClick={handleOpenModal} src={personagens.image}></img>
                  </div>

                  <p>{personagens.name}</p>
                </div>
              </div>
            </>

          );

        })}
      </div>

      {modalIsOpen && (
        <div className={styles.modal}>

          <Modal
            isOpen={modalIsOpen}
            onRequestClose={handleOpenModal}

            img={resposta && resposta?.image ? resposta?.image : 'sem imagem'}
            name={resposta && resposta?.name ? resposta?.name : 'Desconhecido'}
            house={resposta?.house}
            species={resposta?.species}
            dateOfBirthe={resposta?.dateOfBirth}
            gender={resposta?.gender}
            patronus={resposta?.patronus}
            wand={resposta?.wand}
            wood={resposta?.wand?.wood}
            core={resposta?.core}
            length={resposta?.wand?.length}
            ancestry={resposta?.ancestry}
            actor={resposta?.actor}
            setIsOpen={setIsOpen}
            modalIsOpen={modalIsOpen}
          />
        </div>
      )}






    </div >
  )

}

export default Persongens;