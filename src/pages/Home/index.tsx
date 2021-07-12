import { Header } from '../../components/Header';
import { useLightOrDarkForce } from '../../hooks/useLightOrDarkForce'

import { Container, Content, ContainerLoading } from './styles';
import vaderImg from '../../assets/img/darth-vader.png';
import luckImg from '../../assets/img/luke-skywalker.png';

export const Home = () => {
  const { getLightOrDarkForce, lightOrDarkForce, isLoading } = useLightOrDarkForce();

  const isDarkForce = lightOrDarkForce.name === 'Darth Vader'; 
  
  
  return (
    <>      
      <Header />
      {isLoading && (
        <ContainerLoading>
          <span className="loader"/>
          <strong>Loading...</strong>
        </ContainerLoading>
      )}
      <Container isDarkForce={isDarkForce}>
        <Content isDarkForce={isDarkForce}>
          <button title="retry" onClick={getLightOrDarkForce} disabled={isLoading}>choose your path again, Padawan</button>
          <div>          
            <img src={isDarkForce ? vaderImg : luckImg} alt={lightOrDarkForce.name}></img>
            <h1>Your master is <span>{lightOrDarkForce.name}</span></h1>   
          </div>        
        </Content>
      </Container>
    </>
  );
}


