import React from 'react';

export default function Pagination({ paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(50 / 10); i += 1) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex flex-row mt-4 justify-center">
      {pageNumbers.map((number) => (
        <button type="button" onClick={() => paginate(number)} className="text-purple-600 border-purple-600 border px-4 hover:bg-purple-600 hover:text-white transition-all cursor-pointer">
          {' '}
          {number}
          {' '}
        </button>
      ))}
    </div>
  );
}
