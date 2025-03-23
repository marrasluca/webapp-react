import axios from "axios"
import { useState } from "react"
import { Navigate, Link } from "react-router-dom"

export default function CreateMoviePage(){

const initialData = {
    title: "",
    author: "",
    image: null,
    abstract: ""
}


const [ formData, setFormData ] = useState(initialData)

const setFieldValue = (e) => {
    const { name, value } = e.target


    if ( name === "image" ) {

     setFormData({
        ...formData,
        image: e.target.files[0]
    });
} else {
    setFormData({
        ...formData,
        [name]: value,
    });
}

};

const handleSubmit = (e) => {
    e.preventDefault()

    axios.post ( 'http://localhost:3001/movies', formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    } )
    .then( () => Navigate("/") )
    .catch( (err) => console.log(err) );
}
}
return(
    <>
  <h1>Qui andrà il form</h1>

  <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label>Titolo</label>
                    <input
                    className="form-control"
                        name="title"
                        type="text"
                        value={formData.title}
                        onChange={setFieldValue}
                        required
                    />
                    </div>
                    <div className="mb-4">
                    <label>Autore</label>
                    <input
                    className="form-control"
                        type="text"
                        name="author"
                        value={formData.author}
                        onChange={setFieldValue}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label>Immagine</label>
                    <input
                        className="form-control"
                        type="file"
                        name="image"
                        onChange={setFieldValue}
                        required
                    />
                </div>
                <div  className="mb-4">
                    <label>Abstract</label>
                    <textarea
                        name="abstract"
                        value={formData.abstract}
                        className="form-control"
                        onChange={setFieldValue}
                        required
                    />
                </div>
                <div className="border-top mb-3 pt-3 d-flex justify-content-between">
                    <Link className="btn btn-secondary" to="/">Back</Link>
                    <button className="btn btn-success" type="submit">Aggiungi Film</button>
                </div>
                
            </form>
    </>
);
