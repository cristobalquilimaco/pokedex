import React from 'react';

const Pagination = ({
  pokePerPage,
  urlBase,
  currentPoke,
  setPokePerPage,
  setCurrentPoke,
  totalPokemons,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPokemons / pokePerPage); i++) {
    pageNumbers.push(i);
  }

  const isFirstPage = currentPoke === 1;
  const isLastPage = currentPoke >= pageNumbers.length;

  const onPreviusPage = () => {
    if (!isFirstPage) {
      setCurrentPoke(currentPoke - 1);
    }
  };

  const onNextPage = () => {
    if (!isLastPage) {
      setCurrentPoke(currentPoke + 1);
    }
  };

  const onSpecificPage = (n) => {
    setCurrentPoke(n);
  };

  return (
    <nav className="pagination is-centered mb-6" role="navigation" aria-label="pagination">
      <button
        className={`pagination-previous ${isFirstPage ? 'is-disabled' : ''}`}
        onClick={onPreviusPage}
        disabled={isFirstPage}
      >
        Previous
      </button>
      <button
        className={`pagination-next ${isLastPage ? 'is-disabled' : ''}`}
        onClick={onNextPage}
        disabled={isLastPage}
      >
        Next page
      </button>
      <ul className="pagination-list">
        {pageNumbers.map((noPage) => (
          <li key={noPage}>
            <a
              className={`pagination-link ${noPage === currentPoke ? 'is-current' : ''}`}
              onClick={() => onSpecificPage(noPage)}
            >
              {noPage}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;