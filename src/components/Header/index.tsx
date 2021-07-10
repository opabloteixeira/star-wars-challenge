import { useHistory } from 'react-router-dom';

import { BiArrowBack } from 'react-icons/bi'

import { Container } from './styles';

export const Header = () => {
  let history = useHistory()


  const backPage = () => {
    history.push("/")
  }

  return (
    <Container isDarkSide>
      <button onClick={backPage}>
        <BiArrowBack size={'2rem'} />
        <span>back</span>
      </button>
    </Container>
  )
}