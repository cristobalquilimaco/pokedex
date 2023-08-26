const Pagination = ({
  pokePerPage,
  currentPoke,
  setCurrentPoke,
  totalPokemons,
}) => {
  const pageNumbers = [];
  const maxVisiblePages = 10;
  const startPage = Math.max(1, currentPoke - Math.floor(maxVisiblePages + 1));
  
  for (let i = startPage; i <= Math.min(startPage + maxVisiblePages - 1, Math.ceil(totalPokemons / pokePerPage)); i++) {
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

  const onSpecificPage = (pageNumber) => {
    setCurrentPoke(pageNumber);
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