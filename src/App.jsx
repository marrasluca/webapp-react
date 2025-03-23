
import DefaultLayout from './layouts/DefaultLayout'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePages'
import MoviePage from './pages/MoviePage'
import CreateMoviePage from'./pages/CreateMoviePage'


function App() {
 

  return (
    <>
      <BrowserRouter>


      <Routes>


      <Route Component={ DefaultLayout }>
      <Route path='/' Component={HomePage}/>
      <Route path='/movies/:id' Component={MoviePage}/>
      <Route path='/movies/create' Component={CreateMoviePage}/>
      </Route>


      </Routes>


      </BrowserRouter>

    </>
  )
}

export default App
