import { BiLoaderCircle } from 'react-icons/bi';


import { Header } from '../../components/Header';

import { Container, Content } from './styles';
import vaderImg from '../../assets/img/darth-vader.png';
import luckImg from '../../assets/img/luke-skywalker.png';

export const Home = () => {

  const isDarkSideName = 'Darth Vader';  



  return (
    <>      
      <Header />
      <Container isDarkSide>
        <Content isDarkSide>
          <button title="retry">choose your path again, Padawan</button>
          <div>          
            <img src={luckImg}></img>
            <h1>Your master is <span>{isDarkSideName}</span></h1>   
          </div>        
        </Content>
      </Container>
    </>
  );
}


