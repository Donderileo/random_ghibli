import Head from 'next/head'
import { useState } from 'react';
import styles from '../styles/Nav.module.css';
import images from '../../images.json'
export default function Nav() {

    function returnToHome() {
        window.location.replace('/');
    }

    return (
        <div OnClick={returnToHome} className={styles.nav}>
            <p className={styles.title}>Random Ghibli Generator</p>

        </div >
    )
}