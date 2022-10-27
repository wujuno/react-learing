import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import Movie from "../components/Movie-d";

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
        <div>
            {loading 
            ? <h1>Loading...</h1> 
            : <Movie
                key={movie.id}
                title={movie.title}
                year={movie.year}
                rating={movie.rating}
                runtime={movie.runtime}
                description={movie.description_full}
                coverImg={movie.large_cover_image}
            /> 
            }
        </div>
    );
}
export default Detail;