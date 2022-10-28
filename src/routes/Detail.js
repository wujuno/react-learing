import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import Movie from "../components/Movie-d";
import styles from "./Detail.module.css";

function Detail() {
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState();
    const {id} = useParams();
    const getMovie = async () => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie);
        setLoading(false);
    }
    useEffect(() => {
       getMovie()
    },[])
    console.log(movie);
    return (
        <div className={styles.container}>
            {loading 
            ? <div className={styles.loader}><h1>Loading...</h1></div> 
            : <div className={styles.movie}>
                <Movie
                key={movie.id}
                title={movie.title}
                genres={movie.genres}
                year={movie.year}
                rating={movie.rating}
                runtime={movie.runtime}
                description={movie.description_full}
                coverImg={movie.large_cover_image}
            /> 
            </div>
            }
        </div>
    );
}
export default Detail;