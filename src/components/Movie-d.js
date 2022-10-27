import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Movie({title, year,rating,runtime,description,coverImg}) {
    return (
        <div>
            <img src={coverImg} alt={title}/>
            <div>
                <span>{title}</span>
                <span>{rating}</span>
            </div>
            <div>
                <p>{description}</p>
            </div>
            <div>
                <span>{year}년</span>
                <span>⏰{runtime}min</span>
            </div>
        </div>
    )
}

export default Movie;