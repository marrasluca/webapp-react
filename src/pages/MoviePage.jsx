import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ReviewCard from "../components/ReviewCard"

export default function MoviePage(){

const {id} = useParams()

const [ movie, setMovie ] = useState({});

const fetchBook = () => {
    axios.get(`http://localhost:3001/movies/${id}`)
    .then( res => setMovie(res.data))
    .catch((error) => console.log(error));
};

useEffect( fetchBook, [id]);

const renderReviews = () => {
    return(
        movie.reviews.map((reviews) => {
            return(
                <ReviewCard key={reviews.id} review={review}/>
            )
        })

    )
}

    return(
            <>
            <h1>{movie.title}</h1>
                <section>
                    <h4>Reviews</h4>
                    {renderReviews()}
                </section>
            </>
    )
}