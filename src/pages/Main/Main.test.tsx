import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { Main } from '.';
import { lightOrDarkForceContext } from '../../hooks/useLightOrDarkForce';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('Main page', () => {  
  const lightOrDarkForce = { name: 'Test' };
  const clearLightOrDarkForce = jest.fn();
  const getLightOrDarkForce = jest.fn();

  beforeEach(() => {
    render(
      <lightOrDarkForceContext.Provider value={{ getLightOrDarkForce, lightOrDarkForce, clearLightOrDarkForce, isLoading: false }}>
        <MemoryRouter>
          <Main />
        </MemoryRouter>
      </lightOrDarkForceContext.Provider>
    );
  });

  it('should render the main page when clicked on the start button', () => {
    fireEvent.click(screen.getByRole('button'));
    expect(mockHistoryPush).toHaveBeenCalledWith('/home');
  });

  it('should render the main page correctly', () => {
    expect(screen.getByText('START')).toBeInTheDocument();
    expect(screen.getByText('FRONTEND CHALLENGE')).toBeInTheDocument();
  });
});
