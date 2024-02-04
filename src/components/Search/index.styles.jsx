import styled from "styled-components";
import { Link } from "react-router-dom";

export const SearchBarContainer = styled.div`
border-left: 1px solid black;
position: relative; 
align-items: center; 
display: flex; 
`

export const IconContainer = styled.div`
position: absolute; 
top: 50%; 
left: 10px; 
transform: translateY(-50%);
`

export const SearchBar = styled.input`
border: none; 
padding-left: 2rem; 
height: 78px;
font-size: 32px; 
padding-left: 40px; 
`

export const SearchResults = styled.ul`
  background-color: #fff;
  border: 1px solid black;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 1;

`;

export const SearchResultItem = styled(Link)`
margin: 0 auto; 
width: 100%; 
cursor: pointer;
display: flex;
justify-content: space-between;  
border-bottom: 1px solid black; 
text-decoration: none; 
align-items: center; 
&:hover {
    background-color: ${(props) => props.theme.button.softPrimary};
}
`

export const ResultImg = styled.img`
height: 5rem; 
width: 5rem; 
object-fit: cover; 
border-right: 1px solid black; 
`

export const ResultTitle = styled.p`
padding-right: 20px; 
`