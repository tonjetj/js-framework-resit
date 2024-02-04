import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import useFetchProduct from '../../hooks/fetchProduct';
import * as S from './index.styles'
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

function Product() {
  const { id } = useParams();
  const { product, loading, error } = useFetchProduct(id);
  const dispatch = useDispatch();
  const [showReviews, setShowReviews] = useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const toggleReviews = () => {
    setShowReviews(!showReviews); 
  }

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
    <S.Breadcrumbs>
      <Link to={'/'}>Home</Link>
      <p>/ {product.title}</p>
    </S.Breadcrumbs>
    <S.Product>
          <S.ContentContainer>
              <S.ImageContainer>
                  <S.ProductImg src={product.imageUrl} loading="lazy" alt={product.description}/>
              </S.ImageContainer>

              <S.CopyContainer>
                  <h1>{product.title}</h1>
                  <div>
                    <S.Wrapper>
                        <Rating name="read-only" alt={product.rating} value={product.rating} precision={0.5} readOnly size='small' />
                        <Link to="#Ratings" onClick={toggleReviews}>({product.reviews.length > 0 ? product.reviews.length : 0})</Link>
                    </S.Wrapper>
                    <S.TagsContainer>
                          {product.tags.map((tag, index) => (
                              <S.Tags key={index}>{tag}</S.Tags>
                          ))}
                    </S.TagsContainer>
                  </div>
                  <p>{product.description}</p>
                  {product.discountedPrice && product.discountedPrice < product.price ? (
                    <S.ProductPrices>
                      <S.OldPrice>{Math.round(product.price)} kr</S.OldPrice>
                      <S.NewPrice>{Math.round(product.discountedPrice)} kr</S.NewPrice>
                    </S.ProductPrices>
                  ) : (
                    <p>{Math.round(product.price)} kr</p>
                  )}
                  <div>
                    <S.Add onClick={handleAddToCart}>Add to cart</S.Add>
                  </div>
              </S.CopyContainer>
          </S.ContentContainer>

          <S.RatingContainer>
            <S.Reviews id="Ratings" onClick={toggleReviews}>
        Reviews ({product.reviews.length > 0 ? product.reviews.length : 0})
        {showReviews ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </S.Reviews>
              {showReviews && (
            <div>
              {product.reviews.length > 0 ? (
                product.reviews.map((review) => (
                  <S.Review className="review" key={review.id}>
                    <S.ReviewRating>
                      <h3>{review.username}</h3>
                      <S.ReviewRating>
                        <Rating name="read-only" alt={product.rating} value={product.rating} precision={0.5} readOnly size='small' />
                      </S.ReviewRating>
                    </S.ReviewRating>
                    <S.ReviewDescription>{review.description}</S.ReviewDescription>
                  </S.Review>
                ))
              ) : (
                <S.Review>
                  <p>No reviews yet.</p>
                </S.Review>
              )}
            </div>
          )}
          </S.RatingContainer>
        </S.Product>
  </S.Container>
  );
}

export default Product;