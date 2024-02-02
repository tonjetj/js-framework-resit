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
background-color: ${(props) => props.theme.colors.white};
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
  height: 32px; 
  min-width: 100%;   
  position: relative; 
  align-items: center; 
  border-bottom: 1px solid black; 
  border-right: 1px solid black; 
  border-top: 1px solid black; 
`

export const Title = styled.h3`
  padding-left: 10px;
  font-size: 14px;
  width: 100%; 
  height: 32px; 
  object-fit: cover; 
  background-color: pink; 
`

export const Sale = styled.p`
  position: absolute;
  right: 0;
  bottom: 0; 
  height: 32px;  
  padding: 0 10px;
  border-left: 1px solid black;
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors.sale};
`;


export const BottomContainer = styled.div`
border-bottom: none; 
border-top: 1px solid black; 
min-width: 100%; 
justify-content: space-between;
position: none; 
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
