import styled from "styled-components";

export const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flexbox;
  height: 100vh; 
`;

export const Breadcrumbs = styled.div`
  display: flex;
  align-items: center;
`;

export const ContactForm = styled.form`
  padding: 2rem 3.5rem 2rem 2rem;
  width: 800px;
  display: flexbox;
margin: 0 auto; 
  justify-content: center;
  background-color: white;
  border: 1px solid black;
`;

export const Form = styled.div`
max-width: 800px; 
padding: 0 2rem; 
margin: 0; 
`

export const ErrorMsg = styled.p`
  color: black;
  padding: 0.5rem;
  background-color: pink;
  margin-bottom: 1rem; 
  margin-top: 0; 
  max-width: 40%; 
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const SubmitButton = styled(Input)`
  background-color: ${(props) => props.theme.button.primary};
  cursor: pointer;
  border: none; 
  transition: background-color 0.3s;
  &:hover {
    background-color: ${(props) => props.theme.button.softPrimary};
  }
`;
