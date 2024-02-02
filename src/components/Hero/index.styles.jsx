import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeroContainer = styled.div`
  min-width: 100%;
  margin: 0;
  height: 93vh;
  border-bottom: 1px solid black;
  position: relative;
  overflow: hidden;
  display: inline-flex;
`;

export const SalePhotoContainer = styled.div`
  width: 100%;
  min-height: 93vh;
  border-right: 1px solid black;
  position: absolute; 
`;

export const SaleBanner = styled.div`
position: absolute; 
background-color: red; 
padding: 5vh;
`

export const SalePhoto = styled.div`
  min-height: 100%;
  min-width: 60%;
  max-width: 60%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: absolute;
  left: 0; 
`;

export const TextContainer = styled.div`
position: absolute;
right: 0;
min-width: 40%;
max-width: 40%;
min-height: 100%;
max-height: 350px; 
border-left: 1px solid black; 
`

export const Text = styled.p`
margin: 5vh 2vh; 
padding: 20px 50px; 
`

export const Links = styled(Link)`
margin: 20px 50px; 
color: black;  
background-color: pink; 
border: 1px solid black; 
text-decoration: none; 
padding: 10px 20px; 
box-shadow: rgb(0,0,0,1) 2px 2px; 
font-family: 'Inconsolata', monospace;
&:hover {
  background-color: #6FFF9B; 
  transition: 0.3s ease; 
}
`

export const Video = styled.video`
max-width: 60%; 
min-height: inherit;
position: absolute;
left: 0; 
object-fit: cover; 
outline: none;
border-right: 1px solid black; 
`

export const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute; 
  bottom: 5%; 
  left: 50%;
`;

export const Dot = styled.div`
  width: 15px;
  height: 15px;
  background-color: ${(props) => (props.active ? '#000' : '#f2f2f2')};
  box-shadow: ${(props) => (props.active ? ' rgb(255, 255, 255) 2px -2px inset;' : 'rgb(0,0,0,1) 2px -2px')}; 
  margin: ${(props) => (props.active ? '0 5px 2px 5px' : '0 5px 0px 5px')};
  border: 1px solid black; 
  cursor: pointer;
`;