import React from 'react'

function WatchList() {
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
            <tr className='align-middle'>
              <td>
                <img src={`https://www.movieposters.com/cdn/shop/products/c104f1bfed20481f35bc96cb9addc940_240x360_crop_center.progressive.jpg?v=1573588574`} alt="Movie Poster" style={{width: '3rem'}} />
                <p className='d-inline mx-4'>Titanic</p>
              </td>
              <td>8.8</td>
              <td>10</td>
              <td>Adventure</td>
              <td className='text-danger'>Delete</td>
            </tr>
            <tr className='align-middle'>
              <td>
                <img src={`https://www.movieposters.com/cdn/shop/products/c104f1bfed20481f35bc96cb9addc940_240x360_crop_center.progressive.jpg?v=1573588574`} alt="Movie Poster" style={{width: '3rem'}} />
                <p className='d-inline mx-4'>Titanic</p>
              </td>
              <td>8.8</td>
              <td>10</td>
              <td>Adventure</td>
              <td className='text-danger'>Delete</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default WatchList
