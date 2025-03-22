import { ArrowLeft, ArrowRight } from 'lucide-react';
import React from 'react';

function Pagination({ handlePagePrev, handlePageNext, pageNumber }) {
  return (
    <nav aria-label="Page navigation example" className="flex justify-center items-center mb-4">
      <ul className="flex items-center -space-x-px h-10 text-base">
        <li>
          <button
            onClick={handlePagePrev}
            className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <span className="sr-only">Previous</span>
            <ArrowLeft className="w-3 h-3" />
          </button>
        </li>
        <li>
          <span className="flex items-center justify-center px-4 h-10 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">
            {pageNumber}
          </span>
        </li>
        <li>
          <button
            onClick={handlePageNext}
            className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <span className="sr-only">Next</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;