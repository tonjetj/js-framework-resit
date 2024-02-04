const useSearch = (products, onSearchResultClick) => {
  const handleInputChange = (event, setSearchTerm, onSearch) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleResultClick = (product) => {
    onSearchResultClick(product);
  };

  return { handleInputChange, handleResultClick };
};

export default useSearch;
