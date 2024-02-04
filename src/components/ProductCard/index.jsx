import React from 'react';
import useFetchProducts from '../../hooks/fetchProducts';
import useFetchDiscount from '../../hooks/fetchDiscount';
import * as S from './index.styles';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';


function ProductCard() {
  const { products, loading, error } = useFetchProducts();
  const productsWithDiscount = useFetchDiscount(products);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  if (loading) {
    return <S.Container>Loading...</S.Container>;
  }

  if (error) {
    return <S.Container>Error: {error.message}</S.Container>;
  }

  return (
    <S.Container>
      {productsWithDiscount.map((product) => (
        <S.Card key={product.id}>
          <S.Linked to={`/product/${product.id}`}>
            <div>
            <S.CardImg src={product.imageUrl} loading="lazy" alt={product.title} />
            <S.TitleContainer>
                <S.Title>{product.title}</S.Title>
                {product.hasDiscount && <S.Sale>-{product.discount}%</S.Sale>}
              </S.TitleContainer>
            </div>
            <S.Copy>
              <div>
                <S.CopyContainer>
                  {product.discountedPrice && product.discountedPrice < product.price ? (
                    <S.DescriptionContainer>
                      <S.OldPrice>{Math.round(product.price)} kr</S.OldPrice>
                      <S.NewPrice>{Math.round(product.discountedPrice)} kr</S.NewPrice>
                    </S.DescriptionContainer>
                  ) : (
                    <S.DescriptionContainer>
                      <S.Prices>{Math.round(product.price)} kr</S.Prices>
                    </S.DescriptionContainer>
                    
                  )}
                </S.CopyContainer>
              </div>
            </S.Copy>
          </S.Linked>
          <div>
            <S.BottomContainer>
              <S.Linked to={`/product/${product.id}`}>
                <S.View>View </S.View>
              </S.Linked>
              <button onClick={() => handleAddToCart(product)}>Add to cart</button>
            </S.BottomContainer>
          </div>
        </S.Card>
      ))}
    </S.Container>
  );
}

export default ProductCard;
