import { BrowserRouter, Route } from 'react-router-dom';

import { LightOrDarkForceProvider } from './hooks/useLightOrDarkForce'

import { Home } from './pages/Home';
import { Main } from './pages/Main';

export const App = () => {
  return (
    <LightOrDarkForceProvider>
      <BrowserRouter>
        <Route exact path="/" component={ Main } />
        <Route path="/home" component={ Home } />
      </BrowserRouter>
    </LightOrDarkForceProvider>
  );
};

