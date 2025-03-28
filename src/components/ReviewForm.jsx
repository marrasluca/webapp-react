import axios from "axios"
import { useState } from "react"

export default function ReviewForm({movie_id, reloadReviews}){

    const endpoint = `http://localhost:3001/movies/${movie_id}/reviews`
    const initialValue = {
        name: "Anonimo",
        text: "lorem ipsum",
        vote: 4
    }

    const [ formData, setFormData ] = useState(initialValue)

    const handleSubmit = (e) => {

        e.preventDefault();

        axios.post( endpoint, formData, {
            headers: {
                "Content-Type": 'application/json',
            },
        })
        .then( () => {
            setFormData(initialValue);
            reloadReviews()

        })
        .catch( (err) => console.log(err));
    }

   const setFieldValue = (e) => {
    const {name,value} = e.target
    setFormData( {
        ...formData,
        [name]: value
    })
   }

    return(
        <>
            <div className="card">
                <h5>Add reviews</h5>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label >Name</label>
                            <input type="text" name="name" className="form-control" value={formData.name} onChange={setFieldValue}/>
                        </div>
                        <div className="form-group">
                             <label >Text</label>
                            <textarea name="text" className="form-control" value={formData.text} onChange={setFieldValue}></textarea>
                        </div>
                        <div className="form-group">
                            <label >Vote</label>
                            <input type="number" min={1} max={5} name="vote" className="form-control" value={formData.vote} onChange={setFieldValue}/>
                        </div>
                        <div className="">
                            <button type="submit" className="btn btn-primary"> Crea recensione </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}