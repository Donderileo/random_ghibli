import Head from 'next/head'
import { useState } from 'react';
import styles from '../styles/Film.module.css';
import images from '../../images.json'

export default function Film(props) {
    console.log(props.image, props.title, props.desc);


    return (
        <div className={styles.container}>
            <div className={styles.texts}>
                <p className={styles.title}>{props.title}</p>
                <p className={styles.description}>{props.desc}</p>
            </div>
            <div className={styles.image}>
                <img src={props.image} alt="Personagens Studio Ghibli" />
            </div>
        </div>
    )
}