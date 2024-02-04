import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;500&family=Montserrat:wght@200;300;500;600&family=Inter:wght@300;400;500&?&display=swap');

    body {
        margin: 0;
        overflow-x: hidden;
        background-color: #f2f2f2; 
    },

    body, p {
        font-family: 'Montserrat', sans-serif;
    }

    h1, h2, h3, h4, a, input {
        font-family: 'Inconsolata', monospace;
    },

    h1, h2, h3, h4, p, a {
        color: ${(props) => props.theme.colors.black};
    }

    p {
        font-size: 14px; 
    }

    ul, li {
        text-decoration: none; 
        list-style: none; 
        margin: 0;
        padding: 0;
    }

    button {
        background-color: ${(props) => props.theme.button.primary};
        font-family: 'Inconsolata', monospace;
        border: none; 
        cursor: pointer; 
        padding: 10px; 
        font-size: 15px; 
        font-weight: 600; 
        width: 100%; 
        margin: 0; 
        &:hover {
            background-color: ${(props) => props.theme.button.secondary};
            transition: 0.3s ease;
        }
    }

`