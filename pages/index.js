import Head from 'next/head'
import styles from '../styles/Home.module.css'

function Home() {

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
        <button onClick={() => window.location.href = '/personagens?house=all'}>
          Veja todos <br />os personagens
        </button>
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
        <img onClick={() => window.location.href = '/personagens?house=gryffindor'} src='grifinoria.png'></img>
        <img onClick={() => window.location.href = '/personagens?house=ravenclaw'} src='sonserina.png'></img>
        <img onClick={() => window.location.href = '/personagens?house=hufflepuff'} src='lufa-lufa.png'></img>
        <img onClick={() => window.location.href = '/personagens?house=slytherin'} src='corvinal.png'></img>
      </div>
    </div>
  )
}

export default Home
