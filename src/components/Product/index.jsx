import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchProduct from '../../hooks/fetchProduct';
import * as S from './index.styles'
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';

function Product() {
  const { id } = useParams();
  const { product, loading, error } = useFetchProduct(id);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!product) {
    return <p>Couldn't find product.</p>;
  }

  return (
    <S.Container>

      <S.ContentContainer>
          <S.ImageContainer>
              <S.ProductImg src={product.imageUrl} loading="lazy" alt={product.description}/>
          </S.ImageContainer>

          <S.CopyContainer>
              <h1>{product.title}</h1>
              <S.Wrapper>
                  <Rating name="read-only" alt={product.rating} value={product.rating} precision={0.5} readOnly size='small' />
                  <Link to="#Ratings">({product.reviews.length > 0 ? product.reviews.length : 0})</Link>
              </S.Wrapper>
              <S.TagsContainer>
                    {product.tags.map((tag, index) => (
                        <S.Tags key={index}>{tag}</S.Tags>
                    ))}
              </S.TagsContainer>
              <p>{product.description}</p>
              <p>{product.price} kr</p>
              <div>
                <S.Add>Add to cart</S.Add>
              </div>
          </S.CopyContainer>
      </S.ContentContainer>

      <S.RatingContainer>
          <S.Reviews id="Ratings"> Reviews ({product.reviews.length > 0 ? product.reviews.length : 0})</S.Reviews>
          <div>
          {product.reviews.length > 0 ? (
                  product.reviews.map((review) => (
                  <div className="review" key={review.id}>
                    <h3>{review.username}</h3>
                    <S.Wrapper>
                        <Rating name="read-only" alt={product.rating} value={product.rating} precision={0.5} readOnly size='small' />
                        <p>{review.rating}</p>
                    </S.Wrapper>
                    <p>{review.description}</p>
                  </div>
                  ))
                ) : (
                  <p>No reviews yet.</p>
              )}
          </div>
      </S.RatingContainer>
    </S.Container>
  );
}

export default Product;