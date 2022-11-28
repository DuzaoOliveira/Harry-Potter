/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useEffect, useRef } from "react";
import Modal from '../components/Modal'
import styles from './styles.module.css';
import axios from "axios";
import Head from 'next/head';

function Persongens() {

  const [resposta, setResposta] = useState();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [personagemAtual, setPersonagemAtual] = useState();
  const [house, setHouse] = useState()
  const defound = 'https://i.pinimg.com/236x/68/8b/6e/688b6e5e058d5e71c652b781147006cc.jpg'

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      let urlParams = undefined;
      params.forEach((value, key) => {
        urlParams = Object.assign({}, urlParams, {
          [key]: value.toString().replace("house=", ""),
        });
      });
      setHouse(urlParams?.house);
    }
  }, []);

  const baseURL = "https://hp-api.herokuapp.com/api/characters";

  useEffect(() => {
    if (house) {
      if (house === "all") {
        axios.get(baseURL).then((response) => setResposta(response.data));
      } else {
        axios
          .get(baseURL + `/house/${house}`)
          .then((response) => setResposta(response.data));
      }
    }
  }, [house]);

  const handleClick = () => {
    window.location.href = "/";
  };

  const handleOpenModal = (personagem) => {
    setPersonagemAtual(personagem);
    setIsOpen(true)
  };

  const houses = () => {
    switch (house) {
      case "all":
        return "PERSONAGENS";
      case "gryffindor":
        return "Grifinória";
      case "hufflepuff":
        return "Lufa-Lufa";
      case "ravenclaw":
        return "Corvinal";
      case "slytherin":
        return "Sonserina";

      default:
        "Desconhecido";
    }
  };

  const ref = useRef(null)
  const handleClickOutside = (event) => {

    if (ref.current && !ref.current.contains(event.target)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [])

  return (

    <div className={styles.container}>

      <Head>
        <title>Personagens</title>
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

        <p>{houses()}</p>

        <div className={styles.linha}>
          <img src='topo.png'></img>
        </div>

      </div>

      <div className={styles.boxcard} ref={ref} onClick={handleClickOutside} >

        {resposta && Object.values(resposta).map((personagem) => {

          return (

            <>
              <div onClick={() => handleOpenModal(personagem)}>
                <div className={styles.nome}>
                  <div className={styles.todos}>
                    <img src={personagem.image !== "" ? personagem.image : defound} />
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
            img={personagemAtual?.image ? personagemAtual?.image : defound}
            name={personagemAtual?.name ? personagemAtual?.name : 'Desconhecido'}
            house={personagemAtual?.house ? personagemAtual?.house : 'Desconhecido'}
            species={personagemAtual?.species ? personagemAtual?.species : 'Desconhecido'}
            dateOfBirth={personagemAtual?.dateOfBirth ? personagemAtual?.dateOfBirth : 'Desconhecido'}
            gender={personagemAtual?.gender ? personagemAtual?.gender : 'Desconhecido'}
            patronus={personagemAtual?.patronus ? personagemAtual?.patronus : 'Desconhecido'}
            wood={personagemAtual?.wand?.wood ? personagemAtual?.wand.wood : 'Desconhecido'}
            core={personagemAtual?.wand?.core ? personagemAtual?.wand?.core : 'Desconhecido'}
            length={personagemAtual?.wand?.length ? personagemAtual?.wand.length : 'Desconhecido'}
            ancestry={personagemAtual?.ancestry ? personagemAtual?.ancestry : 'Desconheicdo'}
            actor={personagemAtual?.actor ? personagemAtual?.actor : 'Desconhecido'}
            setIsOpen={setIsOpen}
            modalIsOpen={modalIsOpen}
          />

        </div>
      )}






    </div >
  )

}

export default Persongens;