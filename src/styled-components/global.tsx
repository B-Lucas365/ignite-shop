'use client'
import { createGlobalStyle } from "styled-components"

const Globals = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    :root {
        --white: #fff;

        --gray900: #121214 ;
        --gray800: #202024;
        --gray300: #c4c4cc;
        --gray100: #e1e1e6;
    
        --green500: #00875f;
        --green300: #00b37e;
    }

    body {
        background-color: var(--gray900);
        color: var(--gray100);
    }
`

export const GlobalStyles = () => {
    return <Globals />
}
