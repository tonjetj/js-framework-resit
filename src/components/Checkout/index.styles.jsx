import styled from "styled-components";

export const Container = styled.div`
display: flexbox; 
margin: 0 auto; 
min-width: 300px;
max-width: 500px; 
padding: 1rem; 
border: 1px solid black; 
& > h1 {
    padding-left: 25px; 
}

`
export const ProductContainer = styled.div`
display: flexbox; 
justify-content: space-between; 
max-width: 500px; 
margin: 0 auto; 
padding: 10px; 
`
export const Product = styled.div`
border-bottom: 1px solid black; 
margin: 2px auto; 
display: flex; 
justify-content: space-between; 
align-items: center; 
padding: 0 1rem; 
`

export const ProductImage = styled.img`
height: 5rem; 
width: 5rem; 
object-fit: cover;
justify-content: start;
border: 1px solid black;  
`

export const CopyContainer = styled.div`
justify-content: end; 
text-align: right; 
width: 100%; 
`

export const CheckoutBtn = styled.button`
border: 1px solid black; 
`

export const TotalContainer = styled.div`
text-align: right; 
margin: 0 auto; 
padding: 0 1rem; 
`

export const OldPrice = styled.p`
text-decoration: line-through; 
`

export const Discount = styled.p`
color: red; 
`

export const NewPrice = styled.p`
font-weight: bold; 
`
