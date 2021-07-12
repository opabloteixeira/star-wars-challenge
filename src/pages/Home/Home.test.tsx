import { render, screen, cleanup  } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { Home } from '.';
import { lightOrDarkForceContext } from '../../hooks/useLightOrDarkForce';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('Home page', () => {  
  afterEach(cleanup);

  it('should show spiner while data loads', () => {    
    const lightOrDarkForce = { name: 'Test' };
    const getLightOrDarkForce = jest.fn();
    const clearLightOrDarkForce = jest.fn();

    render(
      <lightOrDarkForceContext.Provider value={{ getLightOrDarkForce, lightOrDarkForce, clearLightOrDarkForce, isLoading: true  }}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </lightOrDarkForceContext.Provider>
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  }); 

  it('should render correctly when Luke Skywalker is the master', () => {    
    const lightOrDarkForce = { name: 'Luke Skywalker' };
    const getLightOrDarkForce = jest.fn();
    const clearLightOrDarkForce = jest.fn();

    render(
      <lightOrDarkForceContext.Provider value={{ getLightOrDarkForce, lightOrDarkForce, clearLightOrDarkForce, isLoading: false  }}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </lightOrDarkForceContext.Provider>
    );

    expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
  });
  

  it('should render correctly when Darth Vader is the master', () => {    
    const lightOrDarkForce = { name: 'Darth Vader' };
    const getLightOrDarkForce = jest.fn();
    const clearLightOrDarkForce = jest.fn();

    render(
      <lightOrDarkForceContext.Provider value={{ getLightOrDarkForce, lightOrDarkForce, clearLightOrDarkForce, isLoading: false }}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </lightOrDarkForceContext.Provider>
    );

    expect(screen.getByText('Darth Vader')).toBeInTheDocument();
  }); 
  
});
