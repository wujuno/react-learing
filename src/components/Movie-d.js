import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "./Movie-d.module.css";

function Movie({title, year,rating,runtime,description,coverImg, genres}) {
    return (
        <div className={styles.movie}>
            <img src={coverImg} alt={title} className={styles.img}/>
            <div className={styles.content}>
                <div>
                    <span className={styles.title}>{title}</span>
                    <span className={styles.rating}>⭐({rating})</span>
                    <span className={styles.genres}>{genres.map((g)=><li>{g}</li>)}</span>
                </div>
                <div>
                    <p className={styles.description}>{description}</p>
                </div>
                <div>
                    <span className={styles.year}>{year}년</span>
                    <span className={styles.runtime}>{runtime}min</span>
                </div>
            </div>
        </div>
    )
}

export default Movie;