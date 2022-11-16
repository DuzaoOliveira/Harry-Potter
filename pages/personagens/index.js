import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from './styles.module.css';
import Head from 'next/head'

function Persongens() {

  const [resposta, setResposta] = useState();

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
              <img src={personagens.image}></img>

              {/* <p>{personagens.name}</p> */}
            </>
          );

        })}
      </div>

    </div>
  )

}

export default Persongens;