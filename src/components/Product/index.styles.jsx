import styled from "styled-components";

export const Wrapper = styled.div`
    display: flexbox; 
`

export const Container = styled(Wrapper)`
    max-width: 1200px; 
    margin: 0 auto; 
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
    display: flexbox; 
    gap: 20px; 
    padding: 0 30px 0 0; 
    min-width: 300px; 
    max-width: 300px; 
`

export const TagsContainer = styled.div`
    width: 100%; 
    display: flex; 
    gap: 10px; 
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
`

export const Add = styled.button`
    margin-top: 40px; 
    border: 1px solid black; 
    box-shadow: rgb(0,0,0,1) 2px 2px; 
`