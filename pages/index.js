import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import axios from 'axios';

function Home() {

  const [todos, setTodos] = useState('');

  const harryPotter = (name) => {
    setIsOpen(true);
    axios.get(`https://hp-api.herokuapp.com/api/characters/${name}`)
      .then((preview) => {
        setTodos(preview.data);
        console.log(todos,)
      })
  }

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

      <div className={styles.logo}>
        <img src='logo.png'></img>
      </div>

      <div className={styles.button}>
        <button>Veja todos <br />os personagens</button>
      </div>

      <div className={styles.logo2}>

        <div className={styles.logo22}>
          <img src='logo2.png'></img>
        </div>

        <p>Navegue pelas Casas</p>

        <div className={styles.linha}>
          <img src='topo.png'></img>
        </div>
      </div>

      <div className={styles.cards}>
        <img src='grifinoria.png'></img>
        <img src='sonserina.png'></img>
        <img src='lufa-lufa.png'></img>
        <img src='corvinal.png'></img>
      </div>




    </div>
  )
}

export default Home
