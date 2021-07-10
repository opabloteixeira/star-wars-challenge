import styled from 'styled-components';

interface HomeProps {
  isDarkSide: boolean;
}

export const Container = styled.div<HomeProps>`
  padding: 0 2rem;
  height: 100vh;
  width: 100%;
  margin: 0 auto;

  background: ${props => props.isDarkSide ? `var(--black)` : `var(--yellow)`};

  display: flex;
  align-items: baseline;
  justify-content: center;
`;

export const Content = styled.div<HomeProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: ${props => props.isDarkSide ? `var(--white)` : `var(--black)` };   
  margin-top: 60px;

  @media (max-width: 800px) {
    flex-direction: column-reverse;    
    button {
      margin-top: 40px;
    }
    div {
      margin-top: 0;
    }
  } 

  button {
    width: 350px;
    height: 3.5rem;
    border: 0;
    border-radius: 0.65rem;
    background: ${props => props.isDarkSide ? `var(--white)` : `var(--black)` };
    color: ${props => props.isDarkSide ? `var(--black)` : `var(--yellow)` };

    font-style: normal;
    font-weight: bold;
    font-size: 1rem;
    line-height: 1.50rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }

    &:disabled {
      filter: opacity(5);
      cursor: default;
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;    
    margin-top:  72px;

    img {
      border-radius: 50%;
    }
    h1 {      
      font-size: 2.30rem;
      line-height: 2.6rem;
      font-weight: 400;
      margin-top: 40px;

      span {
        font-weight: 700;
      } 
    }  

    p {
      font-size: 0.90rem;
      line-height: 1.1rem;
      letter-spacing: 0.35em;
    }   
  }    
`;