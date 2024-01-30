import React from 'react';
import * as S from './index.styles';
import slides from '../../data/slides/slidesData';
import useSlider from '../../hooks/slideshow';

function Hero() {
  const {currentSlide, handleDotClick} = useSlider(0, slides.length);

  return (
    <S.HeroContainer>
      {slides.map((slide, index) => (
        <S.SalePhotoContainer key={index} style={{ display: index === currentSlide ? 'block' : 'none' }}>
          {slide.image && 
              <div>
                <S.SalePhoto style={{ backgroundImage: `url(${slide.image})` }} />
                <S.SaleBanner>{slide.specialFeature}</S.SaleBanner>
               </div>
          }{slide.video && (
            <S.Video loop autoPlay muted>
              <source src={slide.video} type="video/mp4" alt={slide.alt}/>
              Your browser does not support the video tag.
            </S.Video>
          )}
          <S.TextContainer>
              <h1>{slide.title}</h1>
              <S.Text>{slide.text}</S.Text>
              <S.Links to={slide.link}>{slide.cta}</S.Links>
          </S.TextContainer>
        </S.SalePhotoContainer>
      ))}

      <S.DotContainer>
        {slides.map((_, index) => (
          <S.Dot key={index} active={index === currentSlide} onClick={() => handleDotClick(index)} />
        ))}
      </S.DotContainer>
    </S.HeroContainer>
  )
};

export default Hero;