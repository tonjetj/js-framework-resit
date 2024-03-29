import styled from "styled-components";

export const Wrapper = styled.div`
    display: flexbox; 
`

export const Container = styled(Wrapper)`
    max-width: 1200px; 
    margin: 0 auto; 
`

export const Breadcrumbs = styled.div`
display: flex; 
align-items: center; 
`

export const Product = styled.div`
border: 1px solid black; 
`

export const ContentContainer = styled.div`
    display: flex; 
    justify-content: space-between; 
    align-items: stretch; 
    gap: 30px; 
`

export const ImageContainer = styled.div` 
    max-width: 100%;
    justify-content: start;  
    margin: 0 auto; 
    height: 55vh;
    background-color: blue; 
`

export const ProductImg = styled.img`
    object-fit: cover; 
    width: 55vh; 
    height: inherit; 
    border-right: 1px solid black; 
`

export const CopyContainer = styled.div`
    display: flex; 
    flex-direction: column; 
    margin: 2rem auto; 
    gap: 1rem; 
    padding: 0 30px 0 0; 
    min-width: 300px; 
    max-width: 300px; 
`

export const TagsContainer = styled.div`
    width: 100%; 
    display: flex; 
    gap: 0.5rem; 
`

export const ProductPrices = styled.div`
    display: inline-flex;
    gap: 2rem; 
    width: 100%; 
    & > p  {
        font-size: 30px; 
        font-family: 'Inconsolata', monospace;
    }
`

export const Tags = styled.p`
    border-radius: 20px; 
    padding: 3px 10px; 
    border: 1px solid  ${(props) => props.theme.colors.black}; 
    font-size: 13px; 
    background-color: ${(props) => props.theme.button.softPrimary}; 
`

export const RatingContainer = styled(Wrapper)`
    border-top: 1px solid black; 
    overflow: hidden; 
    margin: 0 auto; 
    padding: 0; 
`

export const Reviews = styled.h2`
    background-color: ${(props) => props.theme.button.secondary};
    border-bottom: 1px solid black; 
    padding: 20px; 
    margin: 0; 
    display: flex; 
    justify-content: space-between; 
    cursor: pointer; 
`
export const Review = styled.div`
    padding: 0 1.5rem; 
    border-bottom: 1px solid black; 
`

export const ReviewRating = styled.div`
    display: inline-flex; 
    align-items: center; 
    padding: 0; 
    margin: 0; 
    gap: 1rem; 
`
export const ReviewDescription = styled.p`
    padding-left: 2rem;
    padding-bottom: 2rem;  
`

export const Add = styled.button`
    margin-top: 40px; 
    border: 1px solid black; 
    box-shadow: rgb(0,0,0,1) 2px 2px; 
`


export const OldPrice = styled.p`
    text-decoration: line-through; 
`

export const NewPrice = styled.p`
    font-weight: bold; 
`
