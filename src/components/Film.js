import Head from 'next/head'
import { useState } from 'react';
import styles from '../styles/Film.module.css';
import images from '../../images.json'

export default function Film(props) {
    console.log(props.image, props.title, props.desc)
    return (
        <div className={styles.container}>
            <img class={styles.image} src={props.image} alt="Personagens Studio Ghibli" />
            <p class={styles.title}>{props.title}</p>
            <p class={styles.description}>{props.desc}</p>
        </div>
    )
}