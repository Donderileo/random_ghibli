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
    <div>

      <Nav />


      {
        exhibit ? (
          <Film
            image={images[films[random].title.toUpperCase()]}
            title={films[random].title}
            desc={films[random].description}
          />
        )
          :
          <Film
            image='/images/all_ghibli.jpg'
            title=' '
          />
      }
      <div className={styles.flexCenter}>
        <div onClick={printFilm} className={styles.divRand}>
          <p className={styles.textRand}>Random</p>
        </div>
      </div>
    </div>
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