import styled from 'styled-components'

export const Container = styled.form`
    h2{
        color:var(--text-title);
        font-size:1.5rem;
        margin-bottom:2rem;
    }
    input{
        width:100%;
        padding: 0 1.5rem;
        height:4rem;
        border-radius:0.25rem;
        border:1px solid #d7d7d7;
        background:#e7e9ee;
        font-weight:400;
        font-size:1rem;

        &::placeholder{
            color:var(--text-body)
        }
        & +input{
            margin-top:1rem;
        }
    }
    textarea{
        width:100%;
        padding: 0 1.5rem;
        height:8rem;
        border-radius:0.25rem;
        border:1px solid #d7d7d7;
        background:#e7e9ee;
        font-weight:400;
        font-size:1rem;
        font-family:sans-serif;
        -webkit-font-smoothing:antialiased;
        display:flex;
        &::placeholder{
            color:var(--text-body);
   
            padding:3rem 0.4rem;
            
        }
        margin-top:1rem;
        margin-bottom:1rem;
    }

    button{
        margin-top:1rem;
        width:100%;
        padding: 0 1.5rem;
        height:4rem;
        color:#fff;
        border-radius:0.25rem;  
        border:0;
        background-color:#04d662;
    }

    select{
        width:100%;
        padding: 0 1.5rem;
        height:4rem;
        border-radius:0.25rem;
        border:1px solid #d7d7d7;
        background:#e7e9ee;
        font-weight:400;
        font-size:1rem;

        &::placeholder{
            color:var(--text-body)
        }
       
        margin-top:1rem;
        margin-bottom:1rem;
        

    }

`;