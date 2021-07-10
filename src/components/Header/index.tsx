import { BiArrowBack } from 'react-icons/bi'

import { Container } from './styles';

export const Header = () => {
  return (
    <Container isDarkSide>
      <button>
        <BiArrowBack size={'2rem'} />
        <span>back</span>
      </button>
    </Container>
  )
}