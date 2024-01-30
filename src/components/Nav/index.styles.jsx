import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
margin: 0; 
height: 80px; 
display: inline-flex; 
align-items: center; 
justify-content: space-between; 
`

export const Links = styled(Link)`
padding: 20px; 
text-decoration: none; 
font-size: 25px; 
text-transform: uppercase; 
color: #000; 
`