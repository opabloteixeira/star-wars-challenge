import { useHistory } from 'react-router-dom';
// import { useStrengthSide } from '../../context/StrengthSideContext';

import { Container, Content } from './styles';

export function Main() {  
  let history = useHistory()
  // const { getStrengthSide } = useStrengthSide(); 

  function redirectToStrengthSidePage() {
    // getStrengthSide();
    history.push("/home")
  }

  return (
    <Container> 
      <Content>
        <h1>Welcome to <span>iClinic</span></h1>   
        <p>FRONTEND CHALLENGE</p> 

        <button onClick={redirectToStrengthSidePage}>START</button>
      </Content>
    </Container>
  );
}