import styled from "styled-components";

export const Cart = styled.div`
  border-left: 1px solid black;
  height: 80px; 
  display: flex; 
  align-items: center; 
  padding: 0px 25px; 
  background-color: orange; 
  position: relative; 
  &:hover {
    cursor: pointer; 
  }
`;

export const CartIcon = styled.div`
  display: flex; 
  align-items: center; 
`

export const OpenedCart = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  display: flexbox; 
  position: absolute; 
  min-width: 380px; 
  max-width: 500px;  
  right: 0; 
  top: 81px;
  border-top: none; 
  z-index: 999; 
`

export const TopOpenedCart = styled.div`
  display: inline-flex; 
  justify-content: space-between;
  width: 100%; 
  top: 0;
  border-left: 1px solid black; 
`
export const TopTitle = styled.h3`
  max-width: 80%;
  margin-left: 20px; 
`

export const CloseCart = styled.button`
  max-width: 20%;
  border-left: 1px solid black; 
  background-color: ${(props) => props.theme.colors.white}; 
  &:hover {
    background-color: ${(props) => props.theme.colors.warning}; 
  }
`

export const CartContent = styled.div`
margin: 0;
border: 1px solid black; 
background-color: ${(props) => props.theme.colors.white};
`

export const CartList = styled.ul`
overflow-y: scroll; 
margin: 0; 
max-height: 380px; 
padding: 0; 
`

const sharedBorder = 'border: 1px solid #e2e8f0;';
const sharedBorderRadius = 'border-radius: 0.25rem;';
const sharedPadding = 'padding: 0.5rem 0.75rem;';
const sharedButton = `
  ${sharedPadding}
  ${sharedBorderRadius}
  ${sharedBorder}
  cursor: pointer;
`;


export const CartItem = styled.li`
  display: flex;
  background-color: white; 
  border-bottom: 0.5px solid black; 
  margin: 0; 
`;

export const ProductImage = styled.img`
  height: 8rem;
  width: 8rem;
  object-fit: cover;
  border-right: 1px solid black; 
`;

export const ProductDetails = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between; 
  margin: 0 auto;
  padding: 0.5rem;  
`;

export const TitlePriceContainer = styled.div`
  display: flex;
  justify-content: space-between;

  & > h4, p {
    margin: 0;
  }

`;

export const Prices = styled.div`
margin: 0; 
padding: 0; 
`

export const Tags = styled.p`
  margin-top: 0.25rem;
  text-transform: capitalize;
  font-size: 12px;
  color: #4a5568;
`;

export const QuantityContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; 
`;

export const QuantityButtons = styled.div`
  display: inline-flex; 
  align-items: center; 
`

export const QuantityButton = styled.button`
  ${sharedButton}  
  background-color: white; 
    &:hover {
      background-color: ${(props) => props.theme.button.primary}
  }
`;

export const MinusButton = styled(QuantityButton)`
    &:hover {
      background-color: ${(props) => props.theme.colors.warning}
  }
`;


export const QuantityDisplay = styled.p`
  ${sharedPadding}
  margin: 0 0.25rem;
  ${sharedBorderRadius}
  ${sharedBorder}
`;

export const DeleteButton = styled.button`
  background-color: white; 
  margin: 0; 
  &:hover {
    background-color: ${(props) => props.theme.colors.white};
    transform: scale(1.2); 
}
`;

export const SubTotalContainer = styled.div`
  padding: 0;  
  width: 100%; 
  margin: 0 auto; 
  border-top: 1px solid black; 
  z-index: 999; 
`

export const ToCheckout = styled.button`
border-top: 1px solid black; 
`

export const OldPrice = styled.p`
text-decoration: line-through; 
`

export const NewPrice = styled.p`
font-weight: bold; 
`
