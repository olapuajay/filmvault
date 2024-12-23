import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faT } from '@fortawesome/free-solid-svg-icons'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import genreIds from '../utility/genre'

function WatchList({watchlist, setWatchlist}) {
  const [search, setSearch] = useState('')
  const [genreList, setGenreList] = useState(['All Genres'])
  const [currGenre, setCurrGenre] = useState('All Genres')

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const handleFilter = (genre) => {
    setCurrGenre(genre)
  }

  const sortIncrease = () => {
    const sortedIncreasing = watchlist.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average
    })
    setWatchlist([...sortedIncreasing])
  }

  const sortDecrease = () => {
    const sortedDecreasing = watchlist.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average
    })
    setWatchlist([...sortedDecreasing])
  }

  useEffect(() => {
    let temp = watchlist.map((movieObj) => {
      return genreIds[movieObj.genre_ids[0]]
    })
    temp = new Set(temp)
    setGenreList(['All Genres', ...temp])
    console.log(temp)
  }, [watchlist])

  return (
    <div className='container mt-4'>
      <h3 className='text-center fw-bold text-uppercase mt-3'>Watch List</h3>
      <div className='container mt-4 d-flex justify-content-center gap-4'>
        {
          genreList.map((genre) => {
            return <button onClick={() => handleFilter(genre)} className={currGenre === genre ? 'btn btn-primary' : 'btn btn-light'}> {genre} </button>
          })
        }
      </div>
      <div className="form-group text-center mx-auto mt-4 mb-4">
        <input onChange={handleSearch} value={search} type="text" className='form-control text-dark' placeholder='Search Movies' />
      </div>
      <div className='container mt-4'>
        <table className='table table-striped table-hover container-fluid'>
          <thead>
            <tr>
              <th>Name</th>
              <th className='d-flex justify-content-center gap-2'>
                <div onClick={sortDecrease}> <FontAwesomeIcon icon={faArrowUp} /> </div>
                <div>Ratings</div>
                <div onClick={sortIncrease}> <FontAwesomeIcon icon={faArrowDown} /> </div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {
              watchlist.filter((movieObj) => {
                return movieObj.title.toLowerCase().includes(search.toLowerCase())
              }).map((movieObj) => {
                return <tr className='align-middle'>
                  <td>
                    <img src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`} alt="Movie Poster" style={{width: '3rem'}} />
                    <p className='d-inline mx-4'> {movieObj.title} </p>
                  </td>
                  <td className='text-center'> {movieObj.vote_average} </td>
                  <td className='text-center'> {movieObj.popularity} </td>
                  <td> {genreIds[movieObj.genre_ids[0]]} </td>
                  <td className='text-danger'>
                    <FontAwesomeIcon icon={faTrash} />
                  </td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default WatchList
