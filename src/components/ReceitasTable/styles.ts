import styled from 'styled-components'


export const Container = styled.div`
    margin-top:4rem;
    display:flex;
    align-items:center;
    justify-content:center;

    table{
        width:80%;
        border-spacing: 0 1rem;

        th{
            color: var(--text-body);
            font-weight:400;
            padding:1rem 2rem;
            text-align:left;
            line-height:1.5rem;
        }

        td{
            padding: 1rem 2rem;
            border:0;
            background-color:#ffffff;
            border-radius:0.25rem;
        }
        button{
            width:100%;
        }
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
    
`