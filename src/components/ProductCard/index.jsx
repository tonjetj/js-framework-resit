import React from 'react';
import useFetchProducts from '../../hooks/fetchDiscount/fetchProducts';
import useFetchDiscount from '../../hooks/fetchDiscount';
import * as S from './index.styles';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import { Rating } from '@mui/material';


function ProductCard() {
  const { products, loading, error } = useFetchProducts();
  const productsWithDiscount = useFetchDiscount(products);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <S.Container>
      {productsWithDiscount.map((product) => (
        <S.Card key={product.id}>
          <S.Linked to={`/product/${product.id}`}>
            <S.CardImg src={product.imageUrl} loading="lazy" alt={product.title} />
            <S.Copy>
              <S.TitleContainer>
                <S.Title>{product.title}</S.Title>
                {product.hasDiscount && <S.Sale>-{product.discount}%</S.Sale>}
              </S.TitleContainer>
              <div>
                <S.CopyContainer>
                {product.discountedPrice ? (
                    <>
                      <S.Prices isDiscounted={true}>{Math.floor(product.price)} kr</S.Prices>
                      <S.Prices isDiscounted={false}>{Math.floor(product.discountedPrice)} kr</S.Prices>
                    </>
                  ) : (
                    <S.Prices isDiscounted={false}>{Math.floor(product.price)} kr</S.Prices>
                  )}
                </S.CopyContainer>
              </div>
            </S.Copy>
          </S.Linked>
          <div>
            <S.BottomContainer>
              <S.Add>Add to cart</S.Add>
            </S.BottomContainer>
          </div>
        </S.Card>
      ))}
    </S.Container>
  );
}

export default ProductCard;