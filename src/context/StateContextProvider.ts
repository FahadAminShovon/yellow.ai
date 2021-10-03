import { createContext, useContext } from 'react';
import { StatusType } from '../utils/GenericTypes';

type StateContextType = {
  issueState: StatusType;
  setIssueState: (val: StatusType) => void;
};

export const StateContext = createContext<StateContextType>({
  issueState: 'open',
  setIssueState: () => {},
});

export const useIssueContext = () => useContext(StateContext);
