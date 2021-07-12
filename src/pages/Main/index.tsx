import { useHistory } from 'react-router-dom';
import { useLightOrDarkForce } from '../../hooks/useLightOrDarkForce';

import { Container, Content } from './styles';

export const Main = () => {  
  let history = useHistory()
  const { getLightOrDarkForce } = useLightOrDarkForce(); 

  const redirectToStrengthSidePage = () => {
    getLightOrDarkForce();
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