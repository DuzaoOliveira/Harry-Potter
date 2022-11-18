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
  const [valores, setValores] = useState();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

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
    setModalIsOpen(true)
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

        {resposta?.map((personagens,) => {
          return (

            <><Modal>

            </Modal>

              <div className={styles.card} onClick={() => escolherPersonagem(personagens.name)}>


                <div className={styles.nome}>
                  <div className={styles.todos}>
                    <img src={personagens.image}></img>
                  </div>

                  <p>{personagens.name}</p>
                </div>
              </div></>
          );

        })}
      </div>

      {/* {valores &&
        <Modal
          nome={valores?.name}
          species={valores.types && valores?.types[0]?.type?.name}
          gender={valores.stats && valores?.stats[0].base_stat}
          house={valores.stats && valores?.stats[1].base_stat}
          dateOfBirth={valores.stats && valores?.stats[2].base_stat}
          patronus={valores.stats && valores?.stats[3].base_stat}
          wood={valores.stats && valores?.stats[4].base_stat}
          length={valores.stats && valores?.stats[5].base_stat}
          core={valores.stats && valores?.stats[6].base_stat}
          ancestry={valores.stats && valores?.stats[7].base_stat}
          actor={valores.stats && valores?.stats[8].base_stat}
          imagem={
            <img src={personagens.image}></img>
          }
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        />
      } */}

    </div>
  )

}

export default Persongens;