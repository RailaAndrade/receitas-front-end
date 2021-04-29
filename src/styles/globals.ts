import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root{
        --background:#f8f2f5;
        --red:#e52e4d;
        --light-red:#FF6370;
        --text-title:#363f5f;
        --text-body:#969cb3;
    }
    *{
        margin:0;
        padding:0;
        box-sizing:0;
        box-sizing:border-box;
    }

    html{
        @media(max-width:1000px){
            font-size:93.75%;
        }
        @media(max-width:720px){
            font-size:87.5%;

        }
    }
    body{
        background:var(--background);
        -webkit-font-smoothing:antialiased;
    }
    button{
        cursor:pointer;
    }
    [disabled]{
        opacity:0.6;
        cursor:not-allowed;
    }

    .react-modal-overlay{
        background: rgba(0,0,0,0.5);
        position:fixed;
        top:0;
        bottom:0;
        right:0;
        left:0;
        display:flex;
        align-items:center;
        justify-content:center;
    }
    .Modal-content{
        width:100%;
        max-width:576px;
        background-color:var(--background);
        padding:3rem;
        position:relative;
        border-radius:0.24rem;
    }
    .react-modal-close{
        position:absolute;
        right:1.5rem;
        top:1.5rem;
        border:0;
        background:transparent;
        font-size:2rem;
    }

`