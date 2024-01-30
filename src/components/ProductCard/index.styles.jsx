import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
max-width: 950px; 
margin: 0 auto; 
display: grid; 
grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); 
`


export const Card = styled.div`
border: 1px solid #000; 
max-width: 400px; 
margin: 20px 15px; 
background-color: #fafafa;
box-shadow: rgba(0, 0, 0, 1) 5px 5px;
`;

export const Linked = styled(Link)`
text-decoration: none; 
`


export const CardImg = styled.img`
min-width: 100%;
max-width: 200px;
height: 300px; 
object-fit: cover;
border-bottom: 1px solid #000; 
margin: 0; 
padding: 0; 
`

export const Copy = styled.div`
margin: 0; 
padding: 0; 
`

export const TitleContainer = styled.div`
display: inline-flex; 
margin: 0 auto; 
padding: 0; 
justify-content: evenly;
min-width: 100%;   
position: relative; 
border-bottom: 1px solid black; 
border-right: 1px solid black; 
`

export const Title = styled.h3`
padding: 5px 5px 10px 10px; 
margin: 0;
font-size: 16px;
min-width: 100%; 
`

export const Sale = styled.p`
position: absolute; 
right: 0; 
bottom: 0; 
border-left: 1px solid black; 
padding: 8px 10px 10px 10px; 
margin: 0 auto; 
background-color: #FFC83F; 
font-size: 14px; 
font-weight: 600; 
`

export const BottomContainer = styled(TitleContainer)`
border-bottom: none; 
border-top: 1px solid black; 
min-width: 100%; 
justify-content: space-between;
position: none; 
`

export const Add = styled.button`
font-family: 'Inconsolata', monospace;
background-color: #6FFF9B; 
border: none; 
color: black; 
padding: 10px; 
font-size: 15px; 
font-weight: 600; 
margin: 0; 
width: 100%; 
cursor: pointer; 
&:hover {
    background-color: #6FA3FF;
    transition: 0.3s ease; 
  }
`

export const CopyContainer = styled.div`
display: inline-flex;
margin: 0 auto; 
max-width: 100%; 
align-items: center; 
max-width: 100%; 
`

export const DescriptionContainer = styled(CopyContainer)`
max-height: 10px; 
margin: 0 auto; 
padding: 10px; 
`

export const Prices = styled.p`
margin-left: 10px; 
font-weight: 600; 
font-size: 16px; 
font-family: 'Inter', sans-serif;
font-weight: 400; 
`

export const DiscountedPrices = styled(Prices)`
border: none; 
text-decoration: line-through; 
opacity: 50%;
`

export const Discount = styled(Prices)`
background-color: #FFDB5845;
padding: 2px 5px 4px;
border: 1px solid #FFDB58;
border-radius: 5px; 
`

export const Reviews = styled(DiscountedPrices)`
text-decoration: underline; 
margin-left: 10px; 
`
