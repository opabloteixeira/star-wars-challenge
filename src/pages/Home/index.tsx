import { Header } from '../../components/Header';
import { useLightOrDarkForce } from '../../hooks/useLightOrDarkForce'


import { Container, Content } from './styles';
import vaderImg from '../../assets/img/darth-vader.png';
import luckImg from '../../assets/img/luke-skywalker.png';

import { BiLoaderCircle } from 'react-icons/bi';
export const Home = () => {
  const { getLightOrDarkForce, lightOrDarkForce, isLoading } = useLightOrDarkForce();



  const isDarkSideName = lightOrDarkForce.name === 'Darth Vader'; 
  

  if (isLoading) {
    return <BiLoaderCircle textRendering="loading" size="5rem" />;
  }
  
  
  return (
    <>      
      <Header />
      <Container isDarkSide={isDarkSideName}>
        <Content isDarkSide={isDarkSideName}>
          <button title="try again" onClick={getLightOrDarkForce} disabled={isLoading}>choose your path again, Padawan</button>
          <div>          
            <img src={isDarkSideName ? vaderImg : luckImg} alt={lightOrDarkForce.name}></img>
            <h1>Your master is <span>{lightOrDarkForce.name}</span></h1>   
          </div>        
        </Content>
      </Container>
    </>
  );
}


