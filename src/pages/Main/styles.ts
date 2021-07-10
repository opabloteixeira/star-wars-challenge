import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  height: calc(100vh - 10rem);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: var(--blue);

  h1 {      
    line-height: 5.2rem;
    font-weight: 300;
    margin-top: 2.5;
    font-size: 4.6rem;

    span {
      font-weight: 700;
    } 
  }  

  p {
    font-size: 0.88rem;
    line-height: 1.1rem;
    letter-spacing: 0.35em;
  }

  button {
    width: 189px;
    height: 3.5rem;
    border: 0;
    border-radius: 0.62rem;
    background: var(--blue);
    color: var(--white);

    font-style: normal;
    font-weight: bold;
    font-size: 1.13rem;
    line-height: 1.38rem;
    letter-spacing: 0.30em;

    margin-top: 162px;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

  
  
