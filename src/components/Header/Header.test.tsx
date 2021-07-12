import { render, fireEvent, screen } from '@testing-library/react';
import { lightOrDarkForceContext } from '../../hooks/useLightOrDarkForce';

import { MemoryRouter } from 'react-router-dom';

import { Header } from '.';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('Header component', () => {      
  const getLightOrDarkForce = jest.fn();
  const clearLightOrDarkForce = jest.fn();
  const lightOrDarkForce = { name: 'Test' };

  beforeEach(() => {
    render(
      <lightOrDarkForceContext.Provider value={{ getLightOrDarkForce, lightOrDarkForce, clearLightOrDarkForce, isLoading: false }}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </lightOrDarkForceContext.Provider>
    );
  });

  it('should render the page correctly', () => { 
    expect(screen.getByText('back')).toBeInTheDocument();
  });

  it('should return to main page correctly', () => {
    fireEvent.click(screen.getByRole('button'));
    expect(mockHistoryPush).toHaveBeenCalledWith('/');
  });

});