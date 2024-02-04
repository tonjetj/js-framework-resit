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
width: 100%;
height: 400px; 
object-fit: cover;
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
  border-top: 1px solid black; 
`

export const Title = styled.h3`
  padding-left: 10px;
  font-size: 14px;
  width: 100%; 
  object-fit: cover; 
`

export const Sale = styled.p`
  height: 100%; 
  align-items: center; 
  display: flex; 
  right: 0;
  bottom: 0; 
  padding: 0 10px;
  border-left: 1px solid black;
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors.sale};
`;


export const BottomContainer = styled.div`
border-bottom: none; 
border-top: 1px solid black; 
min-width: 100%; 
display: flex; 
`

export const View = styled.button`
border-right: 1px solid black; 
background-color: white; 
flex-basis: 40%; 
`


export const CopyContainer = styled.div`
display: flex;
flex-direction: column;
margin: 0 auto;
max-width: 100%;
height: 100%;  
padding: 0.5rem; 
`

export const DescriptionContainer = styled.div`
max-height: 2rem;
min-height: 2.5rem;
margin: 0; 
display: flex; 
width: 100%; 
`

export const Prices = styled.p`
margin-left: 10px; 
font-weight: 600; 
font-size: 16px; 
font-weight: 400; 
`

export const OldPrice = styled(Prices)`
text-decoration: line-through; 
opacity: 50%;
`
export const NewPrice = styled(Prices)`
font-weight: bold; 
`
