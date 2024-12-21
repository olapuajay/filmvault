import './App.css'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Movies from './components/Movies'
import WatchList from './components/WatchList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Banner from './components/Banner'

function App() {

  const [watchlist, setWatchlist] = useState([])

  const handleAddToWatchlist = (movieObj) => {
    const newWatchlist = [...watchlist, movieObj]
    setWatchlist(newWatchlist)
    console.log(newWatchlist)
  }

  const handleRemoveFromWatchlist = (movieObj) => {
    const filteredWatchlist = watchlist.filter((movie) => {
      return movie.id != movieObj.id
    })
    setWatchlist(filteredWatchlist)
    console.log(filteredWatchlist)
  }

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={ <> <Banner /> <Movies watchlist={watchlist} handleAddToWatchlist={handleAddToWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist} /></> } />
          <Route path='/watchlist' element={ <WatchList />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
