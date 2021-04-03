import Head from 'next/head'
import { useState } from 'react';
import styles from '../styles/Home.module.css';
import images from '../../images.json'


export default function Home({films}) {

  const [filmList, setFilmList] = useState([])
  const [exhibit, setExhibit] = useState(0)
  const [random, setRandom] = useState(-1)

  

  function printFilm(){

    setExhibit(1)
    setRandom(randomInt(0,films.length-1))
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
        exhibit ? ( 
          <div>
        <p>{films[random].title}</p>
        <img src={images[films[random].title.toUpperCase()]}></img>
      </div>
      ) 
      :
      <img src="/images/all_ghibli.jpg"></img>
      }
      
      <div onClick={printFilm} className={styles.divRand}>  
        <p className={styles.textRand}>Random</p>
      </div>
    </div>
  )
}

export async function getServerSideProps(){
  const axios = require('axios');
  const data = await axios.get('https://ghibliapi.herokuapp.com/films')
  const films = data.data;



  return {
    props: {
      films
    }
  }
}