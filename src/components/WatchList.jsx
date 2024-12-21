import React from 'react'

function WatchList({watchlist}) {
  return (
    <>
      <h3 className='text-center fw-bold text-uppercase mt-3'>Watch List</h3>
      <div className='container mt-4 d-flex justify-content-center gap-4'>
        <button className='btn btn-primary'> Action </button>
        <button className='btn btn-light'> Adventure </button>
      </div>
      <div className="form-group text-center w-50 mx-auto mt-4 mb-4">
        <input type="text" className='form-control text-dark' placeholder='Search for movies' />
      </div>
      <div className='container mt-4'>
        <table className='table table-striped table-hover'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Ratings</th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {
              watchlist.map((movieObj) => {
                return <tr className='align-middle'>
                  <td>
                    <img src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`} alt="Movie Poster" style={{width: '3rem'}} />
                    <p className='d-inline mx-4'> {movieObj.title} </p>
                  </td>
                  <td> {movieObj.vote_average} </td>
                  <td> {movieObj.popularity} </td>
                  <td>Adventure</td>
                  <td className='text-danger'>Delete</td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default WatchList
