import { Link } from "react-router-dom"

export default function MovieCard(){
    return(
        <>

        <div className="card mb-4">
            <div className="card-body">
                <h5 className="card-title">
                    Titolo film
                </h5>
                <span>Regista</span>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat velit aliquid maxime assumen
                </p>
             <Link to={'movies/2'}>Read More</Link>   
            </div>
        </div>
        
        </>
    )
}
