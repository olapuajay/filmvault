import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, Star, X, Clock } from 'lucide-react'
import './DetailsModal.css'
import axios from 'axios'

function DetailsModal({ item, onClose, watchlist, handleAddToWatchlist, handleRemoveFromWatchlist }) {
  const [trailerKey, setTrailerKey] = useState(null)
  const [loadingTrailer, setLoadingTrailer] = useState(false)
  const [trailerError, setTrailerError] = useState(null)

  useEffect(() => {
    if(item) {
      fetchTrailer()
    }
  }, [item])

  const fetchTrailer = async () => {
    setLoadingTrailer(true)
    setTrailerError(null)
    try {
      const type = item.title ? 'movie' : 'tv'
      const response = await axios.get(`https://api.themoviedb.org/3/${type}/${item.id}/videos?api_key=${import.meta.env.VITE_API_KEY}`)
      const trailer = response.data.results.find(
        video => video.type === 'Trailer' && video.official && video.site === 'YouTube'
      )
      if(trailer) {
        setTrailerKey(trailer.key)
      } else {
        setTrailerError('No official trailer found')
      }
    } catch (error) {
      console.error('Error fetching trailer:', error)
      setTrailerError('Failed to load trailer')
    } finally {
      setLoadingTrailer(false)
    }
  }

  const doesExist = (movieObj) => {
    return watchlist.some(watchlistItem => watchlistItem.id === movieObj.id)
  }


  return (
    <motion.div 
      initial={{ y: "100%" }} 
      animate={{ y: 0 }} 
      exit={{ y: "100%" }} 
      transition={{ type: "spring", stiffness: 100 }}
      className="fixed inset-0 bg-gray-900/90 backdrop-blur-sm z-50 overflow-y-auto"
    >
      <div className="container mx-auto max-w-4xl p-4 md:p-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              {item.title || item.name}
            </h2>
            <div className="flex items-center gap-3 mt-2">
              <div className="flex items-center bg-yellow-500/20 px-2 py-1 rounded-full">
                <Star size={16} className="text-yellow-400 mr-1" />
                <span className="text-sm font-medium">
                  {item.vote_average?.toFixed(1)}
                </span>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                {item.release_date || item.first_air_date}
              </div>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="p-1 rounded-full bg-gray-800 hover:bg-gray-700 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Column - Poster */}
          <div className="w-full md:w-1/3">
            <img 
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              alt={item.title || item.name}
              className="w-full rounded-lg shadow-xl object-cover aspect-[2/3]"
              onError={(e) => {
                e.target.onerror = null
                e.target.src = '/placeholder-movie.png'
              }}
            />
            
            {/* Watchlist Button */}
            <div className="mt-4">
              {doesExist(item) ? (
                <button 
                  onClick={() => handleRemoveFromWatchlist(item)} 
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
                >
                  <X size={18} strokeWidth={2.5} /> Remove from Watchlist
                </button>
              ) : (
                <button 
                  onClick={() => handleAddToWatchlist(item)} 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
                >
                  <Plus size={18} strokeWidth={2.5} /> Add to Watchlist
                </button>
              )}
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="w-full md:w-2/3">
            {/* Overview */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-white">Overview</h3>
              <p className="text-gray-300 leading-relaxed">
                {item.overview || 'No overview available.'}
              </p>
            </div>

            {/* Additional Info */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className='flex items-center gap-2'>
                <h4 className="text-sm font-semibold text-white">Popularity:</h4>
                <p className='text-gray-300'>{item.popularity?.toFixed(0)}</p>
              </div>
              {item.genres?.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-gray-400">Genres</h4>
                  <p className="flex flex-wrap gap-1">
                    {item.genres.map(genre => (
                      <span key={genre.id} className="text-sm bg-gray-800/50 px-2 py-1 rounded">
                        {genre.name}
                      </span>
                    ))}
                  </p>
                </div>
              )}
            </div>

            {/* Trailer */}
            <div>
              <h3 className="text-lg font-semibold mb-2 text-white">Trailer</h3>
              <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden w-full">
                {loadingTrailer ? (
                  <div className="w-full h-full flex justify-center items-center">
                    <p>Loading trailer...</p>
                  </div>
                ) : trailerError ? (
                  <div className="w-full h-full flex justify-center items-center text-gray-300">
                    <p>{trailerError}</p>
                  </div>
                ) : trailerKey ? (
                  <iframe 
                    src={`https://www.youtube.com/embed/${trailerKey}?autoplay=0&rel=0`}
                    title={`${item.title || item.name} Trailer`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <p>Trailer not available</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default DetailsModal