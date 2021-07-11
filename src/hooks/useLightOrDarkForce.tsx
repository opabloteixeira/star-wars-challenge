import { ReactNode, createContext, useState, useContext} from "react";
import api from '../services/api';

type lightOrDarkForceProviderProps = {
  children: ReactNode;
}

type lightOrDarkForce = {
  name: string;
}

type lightOrDarkForceContextData = {
  lightOrDarkForce: lightOrDarkForce;
  getLightOrDarkForce: () => void;
  clearLightOrDarkForce: () => void;
  isLoading: boolean;
}

export const lightOrDarkForceContext = createContext<lightOrDarkForceContextData>({} as lightOrDarkForceContextData);

export const LightOrDarkForceProvider = (props: lightOrDarkForceProviderProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [lightOrDarkForce, setLightOrDarkForce] = useState<lightOrDarkForce>({} as lightOrDarkForce);

  const clearLightOrDarkForce = () => {  
    setLightOrDarkForce({} as lightOrDarkForce);
  }

  const getLightOrDarkForce = () => {  
    setIsLoading(true);
    const callLightForce = api.get('people/1/');
    const callDarkForce = api.get('people/4/');

    Promise
      .all([callLightForce, callDarkForce])
      .then(async([responseLightForce, responseDarkForce]) => { 
        const durationLightForce = await responseLightForce.headers.duration;
        const durationDarkForce = await responseDarkForce.headers.duration;
        console.log({durationLightForce});
        console.log({durationDarkForce});

        let responseData = responseDarkForce.data;
        
        if (durationLightForce < durationDarkForce) {
          responseData = responseLightForce.data;
        }

        setLightOrDarkForce(responseData);
        setIsLoading(false);
      }) 
      .catch(error => {
        console.log(error);
        setIsLoading(false);
      });
  }

  return (
    <lightOrDarkForceContext.Provider value={{lightOrDarkForce, getLightOrDarkForce, clearLightOrDarkForce, isLoading}}>
      {props.children}
    </lightOrDarkForceContext.Provider>
  );
}

export const useLightOrDarkForce = () => useContext(lightOrDarkForceContext);
