import { useHistory } from 'react-router-dom';

import { useLightOrDarkForce} from '../../hooks/useLightOrDarkForce'

import { BiArrowBack } from 'react-icons/bi'

import { Container } from './styles';

export const Header = () => {
  let history = useHistory()

  const { lightOrDarkForce, clearLightOrDarkForce } = useLightOrDarkForce();;
  const isDarkForce = lightOrDarkForce.name === 'Darth Vader'; 

  const backPage = () => {
    clearLightOrDarkForce();
    history.push("/")
  }

  return (
    <Container isDarkForce={isDarkForce}>
      <button onClick={backPage}>
        <BiArrowBack size={'3rem'} />
        <span>back</span>
      </button>
    </Container>
  )
}