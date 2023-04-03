import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
    --color-primary: #FF577F;
    --color-primary-focus: #FF427F;
    --color-primary-disable: #59323F;

    --color-grey-4: #121214;
    --color-grey-3: #212529;
    --color-grey-2: #343B41;
    --color-grey-1: #868E96;
    --color-grey-0: #F8F9FA;
    --color-grey-new: #434b52;

    --color-white: #ffffff;

    --feadback-negative: #E83F5B;
    --feadback-sucess: #3FE864;

}

body{
    background-color: var(--color-grey-4);
}


main{
    overflow-x: hidden;
}

    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    }

    button{
        cursor: pointer;
        outline: none;
        background: transparent;
    }

    ul, ol, li{
        list-style: none;
    }

    img{        
        max-width: 100%;
        max-height: 100%;
    }

    input, select{
        background: transparent;
        outline: none;
    } 


`;
