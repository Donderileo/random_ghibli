import Head from 'next/head'
import { useState } from 'react';
import styles from '../styles/Home.module.css';
import images from '../../images.json'
import Film from '../components/Film';
import Nav from '../components/Nav';


export default function Home({ films }) {

  const [filmList, setFilmList] = useState([])
  const [exhibit, setExhibit] = useState(0)
  const [random, setRandom] = useState(-1)



  function printFilm() {

    setExhibit(1)
    setRandom(randomInt(0, films.length - 1))
  }

  function randomInt(min, max) {
    return min + Math.floor((max - min) * Math.random());

  }


  return (
    <div className={styles.page}>

      <Nav />
      {
        exhibit && (
          <div className={styles.container}>
            <div className={styles.texts}>
              <p className={styles.title}>
                {films[random].title}
              </p>
              <p className={styles.description}>
                {films[random].description}
              </p>
            </div>
            <div className={styles.image}>
              <img src={images[films[random].title.toUpperCase()]} alt="Personagens Studio Ghibli" />
            </div>

            <div className={styles.btns}>
              <div onClick={printFilm} className={styles.divRand}>
                <p className={styles.textRand}>Randomize!</p>
              </div>

            </div>


          </div>
        )
      }




    </div >
  )
}

export async function getServerSideProps() {
  const axios = require('axios');
  const data = await axios.get('https://ghibliapi.herokuapp.com/films')
  const films = data.data;



  return {
    props: {
      films
    }
  }
}