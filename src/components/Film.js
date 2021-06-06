import images from '../../images.json'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/Film.module.css'
export default function Filmont(props) {

    const [title, setTitle] = useState(props.film.title);
    const [release, setRelease] = useState(props.film.release_date);
    const [rtScore, setRtScore] = useState(props.film.rt_score);
    const [runningTime, setRunningTime] = useState(props.film.running_time);



    return (
        <div className={styles.container}>
            <img className={styles.img} src={images[title.toUpperCase()]} alt="Capa do Filme" />
            <p className={styles.title}>
                {title}, <span className={styles.release}>
                    {release}
                </span>
            </p>
            <div className={styles.line2}>
                <p className={styles.time}>
                    {runningTime} min
                </p>
                <p className={styles.score}>
                    {rtScore}<FontAwesomeIcon icon={faStar} className={styles.star} />
                </p>
            </div>

            <br />
            <br />
            <br />
        </div >
    );
}