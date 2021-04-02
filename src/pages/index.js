import Head from 'next/head'
import { useState } from 'react';
import styles from '../styles/Home.module.css'

export default function Home() {

  const [filmList, setFilmList] = useState([])
  const [exhibit, setExhibit] = useState(0)
  const [random, setRandom] = useState(-1)

  const axios = require('axios');
  axios.get('https://ghibliapi.herokuapp.com/films').then(res => setFilmList(res.data))

  function printFilms(){
    filmList.forEach((film) => {
      console.log(film)
    })
    setExhibit(1)
    setRandom(randomInt(0,filmList.length-1))
  }
  
  function randomInt(min, max) {
    return min + Math.floor((max - min) * Math.random());
  }
    

  return (
    <div className={styles.page}>
      <p className={styles.title}>Random Ghibli Generator</p>
      <p>
        
      </p>
      {
      exhibit ? <p>{filmList[random].title}</p> : ''
        
         
        
      }
      <div onClick={printFilms} className={styles.divRand}>  
        <p className={styles.textRand}>Random</p>
      </div>
    </div>
  )
}
