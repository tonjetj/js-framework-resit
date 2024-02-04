import React, {useState, useEffect, useRef} from 'react';
import * as S from './index.styles';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import useFetchProducts from '../../hooks/fetchProducts';
import useSearch from '../../hooks/useSearch';

function Search() {
  const { products, loading, error } = useFetchProducts();
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef(null);
  const { handleInputChange, handleResultClick } = useSearch(
    products,
    onSearchResultClick
  );

  function onSearchResultClick(product) {
    console.log('Navigating to:', product);

  }

  const handleDocumentClick = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setSearchOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <S.SearchBarContainer ref={searchRef}>
      <S.IconContainer>
        <SearchOutlinedIcon fontSize='large'/>
      </S.IconContainer>
      <S.SearchBar
  type='text'
  value={searchTerm}
  onChange={(event) => handleInputChange(event, setSearchTerm, handleResultClick)} onFocus={() => setSearchOpen(true)}
/>

        {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {searchTerm && isSearchOpen && (
        <S.SearchResults>
          {products
            .filter((product) =>
              product.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((result) => (
              <S.SearchResultItem
                key={result.id}
                to={`/product/${result.id}`}
              >
                  <S.ResultImg src={result.imageUrl}/>
                  <S.ResultTitle>{result.title}</S.ResultTitle>
              </S.SearchResultItem>
            ))}
        </S.SearchResults>
      )}
    </S.SearchBarContainer>
  );
}

export default Search;
