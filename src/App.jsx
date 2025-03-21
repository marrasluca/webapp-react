
import DefaultLayout from './layouts/DefaultLayout'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePages'
import MoviePage from './pages/MoviePage'


function App() {
 

  return (
    <>
      <BrowserRouter>


      <Routes>


      <Route Component={ DefaultLayout }>
      <Route path='/' Component={HomePage}/>
      <Route path='/movies/:id' Component={MoviePage}/>
      </Route>


      </Routes>


      </BrowserRouter>

    </>
  )
}

export default App
