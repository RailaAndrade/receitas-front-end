import styled from 'styled-components'

export const Container = styled.header`
    background-color: var(--red);

`


export const Content = styled.div`
    max-width:1120px;
    margin:0 auto;
    padding: 2rem 1rem 4rem;
    display:flex;
    align-items:center;
    justify-content:space-between;
    color:#ffffff;
    svg{
        fill: #fff;
        color:#fff;
       
    }
    span{
        display:flex;
        align-items:center;
        font-size:1.5rem;
        div{
            height:15%;
            width:15%;
            padding:3%;
            background-color:var(--light-red);
            border-radius:50%;
            margin-right:3%;
            img{
                height:100%;
                width:100%;
            
            }
        }
    }
  
    button{
        font-size:1.2rem;
        color:#fff;
        background:var(--light-red);
        border:0;
        padding:0 2rem;
        border-radius:0.25rem;
        display:flex;
        align-items:center;
        justify-content:space-between;
        height:3rem;
        transition: filter 0.2s;
        &:hover{
            filter: brightness(0.9);
        }
    }
    .logout{
        font-size:1.2rem;
        color:#fff;
        background:var(--light-red);
        border:0;
        padding:0 1rem;
        border-radius:0.25rem;
        justify-content:space-between;
        height:3rem;
        transition: filter 0.2s;
        &:hover{
            filter: brightness(0.9);
        }
    }

`