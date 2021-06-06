import Head from 'next/head'
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import styles2 from '../styles/Home2.module.css';

import images from '../../images.json'
import Nav from '../components/Nav';

import Aos from 'aos';
import "aos/dist/aos.css";
import Film from '../components/Film';


export default function Home({ films }) {

  const [filmList, setFilmList] = useState([])
  const [exhibit, setExhibit] = useState(0)
  const [random, setRandom] = useState(-1)

  function printFilm() {
    window.scrollTo(0, 0);
    setExhibit(1)
    setRandom(randomInt(0, films.length - 1))
  }

  function randomInt(min, max) {
    return min + Math.floor((max - min) * Math.random());
  }

  useEffect(() => {
    Aos.init({ duration: 1500, once: true });
  });

  return (
    <div >

      {/* Parte inicial - Randomização. */}

      <div className={styles.page}>
        <Nav />
        {
          exhibit ? (
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

              <div className={styles.btn}>
                <div onClick={printFilm} className={styles.divRand}>
                  <p className={styles.textRand}>Randomize!</p>
                </div>
              </div>
            </div>
          )
            :
            (
              <div>
                <div className={styles.container}>
                  <div className={styles.texts}>
                    <p className={styles.title}>
                      Random Ghibli Generator
                    </p>
                    <div className={styles.description}>
                      <p>
                        Studio Ghibli Inc is a Japanese animation film studio. The studio is best known for its animated feature films, and has also produced several short films, television commercials, and one television film. Studio Ghibli's highest grossing films include Spirited Away (2001), Ponyo (2008), and Howl's Moving Castle (2004).
                      </p>
                      <p className={styles.invite}>
                        Now, I invite you to watch a movie from Ghibli Studio's.
                      </p>
                      <p className={styles.click}>
                        Click Randomize to start!
                      </p>
                    </div>




                  </div>
                  <div className={styles.logo}>
                    <img src="/images/logo_ghibli.png" alt="Personagens Studio Ghibli" />
                  </div>
                  <div className={styles.btn}>
                    <div onClick={printFilm} className={styles.divRand}>
                      <p className={styles.textRand}>Randomize!</p>
                    </div>
                  </div>
                </div>
              </div>
            )
        }
      </div>

      {/* CSS after this: Home2.module.css */}

      <div data-aos="fade-right" className={styles2.banner} >
        <h1 className={styles2.title}>ALL MOVIES</h1>
      </div>
      <div className={styles2.grid}>
        {films.map((film, index) => (
          <div data-aos="fade-in">
            <Film
              key={film.id}
              film={film}
            />
          </div>
        ))}
      </div>
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