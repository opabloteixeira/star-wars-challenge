import styled from 'styled-components';

interface HeaderProps {
  isDarkSide: boolean;
}

export const Container = styled.header<HeaderProps>`
  width: 100%;
  height: 6rem;
  margin: 0 auto; 
  padding: 0 3rem; 
  background: ${props => props.isDarkSide ? `var(--black)` : `var(--yellow)` };

  display: flex;
  align-items: center;
  justify-content: flex-start;

  button {
    border: 0;
    background: none;
    color: ${props => props.isDarkSide ? `var(--white)` : `var(--black)` };
    display: flex;
    justify-content: center;
    align-items: center;
    
    font-size: 1.10rem;
    line-height: 1.40rem;
    font-weight: normal;

    span {
      margin-left: 12px;
    }
  }
`;