import React from 'react'

function WatchList() {
  return (
    <>
      <div className="form-group text-center w-50 mx-auto mt-4 mb-4">
        <input type="text" className='form-control text-dark' placeholder='Search for movies' />
      </div>
      <div className='container mt-4'>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Ratings</th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>

          </tbody>
        </table>
      </div>
    </>
  )
}

export default WatchList
