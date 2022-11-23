/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useEffect } from "react";
import Modal from '../components/Modal'
import styles from './styles.module.css';
import axios from "axios";
import Head from 'next/head';


function Persongens() {

  const [resposta, setResposta] = useState();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [personagemAtual, setPersonagemAtual] = useState();
  console.log(personagemAtual, 'personagensss')


  useEffect(() => {
    axios
      .get('https://hp-api.herokuapp.com/api/characters')
      .then((response) => {
        setResposta(response.data);
        console.log(resposta, 'resposta')
      });
  }, []);

  const handleClick = () => {
    window.location.href = "/";
  };

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



        {resposta && Object.values(resposta).map((personagem) => {
          return (

            <>
              <div onClick={() => handleOpenModal(personagem)}>
                <div className={styles.nome}>
                  <div className={styles.todos}>
                    <img src={personagem.image} />
                  </div>

                  <p>{personagem.name}</p>
                </div>
              </div>
            </>

          );

        })}
      </div>

      {modalIsOpen && (
        <div className={styles.modal}>

          <Modal
            img={personagemAtual?.image ? personagemAtual?.image : 'sem imagem'}
            name={personagemAtual?.name ? personagemAtual?.name : 'Desconhecido'}
            house={personagemAtual?.house ? personagemAtual?.house : 'Desconhecido'}
            species={personagemAtual?.species ? personagemAtual?.species : 'Desconhecido'}
            dateOfBirth={personagemAtual?.dateOfBirth ? personagemAtual?.dateOfBirth : 'Desconhecido'}
            gender={personagemAtual?.gender ? personagemAtual?.gender : 'Desconhecido'}
            patronus={personagemAtual?.patronus ? personagemAtual?.patronus : 'Desconhecido'}
            wood={personagemAtual?.wand?.wood ? personagemAtual?.wand.wood : 'Desconhecido'}
            core={personagemAtual?.wand?.core ? personagemAtual?.wand?.core : 'Desconhecido'}
            length={personagemAtual?.wand?.length ? personagemAtual?.wand.length : 'Desconhecido'}
            ancestry={personagemAtual?.ancestry ? personagemAtual?.ancestry?.ancestry : 'Desconheicdo'}
            actor={personagemAtual?.actor ? personagemAtual?.actor : 'Desconhecido'}
            setIsOpen={setIsOpen}
            modalIsOpen={modalIsOpen}
            handleClose={() => modalIsOpen(false)} personagemAtual={personagemAtual}
          />

        </div>
      )}






    </div >
  )

}

export default Persongens;