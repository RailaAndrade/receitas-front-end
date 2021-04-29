import styled, { keyframes } from 'styled-components';



export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content:center;

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
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px)
  }
  to {
    opacity: 1;
    transform: translateX(0)
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${appearFromLeft} 1s;
  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
    h1 {
      margin-bottom: 24px;
    }
    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.3s;

    }
  }
  > a {
    color: #ff9000;
    display: block;

    text-decoration: none;
    transition: color 0.3s;
    display: flex;
    align-items: center;
    svg {
      margin-right: 16px;
    }

  }
`;

export const Background = styled.div`
  flex: 1;
  
  background-size: cover;
`;

