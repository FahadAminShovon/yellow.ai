import { createContext, useContext } from 'react';

type LoaderContextType = {
  showLoader: boolean;
  setShowLoader: (val: boolean) => void;
};

export const LoaderContext = createContext<LoaderContextType>({
  showLoader: false,
  setShowLoader: () => {},
});

export const useLoaderContext = () => useContext(LoaderContext);
