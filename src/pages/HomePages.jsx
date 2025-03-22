import MovieCard from "../components/MovieCard"
import ReviewCard from "../components/ReviewCard"
import axios from "axios"
import {useState, useEffect} from 'react'

export default function HomePage(){

    const [ movies, setMovies ] = useState([])

    //funzione fetch
    const fetchMovies = () => {
        console.log ( 'Fetching movies...' )

        axios.get('http://localhost:3001/movies')
        .then( res => { setMovies ( res.data ) } )
        .catch ( error => { console.log(error) } )
    }

    const renderMovies = () => {
        return(
            movies.map( (movie) => {
                return(
                    <div className="col" key={movie.id}>
                        <MovieCard movie={movie}/>
                    </div>
                )
            })
        )
    }

    useEffect( fetchMovies, []) 

    return(
       <>
        <h1 className="text-primary">Movies</h1>

        <div className="row row-cols-3">
           {/* <MovieCard/> */}
           { renderMovies() }
        </div>
        </> 
    )
}