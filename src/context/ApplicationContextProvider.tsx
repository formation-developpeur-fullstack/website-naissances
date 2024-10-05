import { Declaration } from "@/types/Declaration";
import React, { useReducer } from "react";
import { ApplicationReducer } from "./ApplicationReducer";
import {
  INITIAL_STATE,
  UPDATE_DECLARATION_STATUS,
  UPDATE_DECLARATIONS,
} from "@/utils";
type StateData = {
  declarations: Declaration[];
};
type Props = {
  state: StateData;
  updateDeclarations: (declarations: Declaration[]) => void;
  updateRequests?: (declarations: Declaration[]) => void;
  updateDeclarationStatus: ({
    id,
    status,
  }: {
    id: string;
    status: string;
  }) => void;
};

// Créer le contexte
export const ApplicationContext = React.createContext<Props>({} as Props);

function ApplicationContextProvider({ children }: any) {
  ///const [state, setState] = useState<StateData>({ declarations: [] });

  const [state, dispatch] = useReducer(ApplicationReducer, INITIAL_STATE);
  const updateDeclarations = (declarations: Declaration[]) => {
    dispatch({ type: UPDATE_DECLARATIONS, data: declarations });
  };
  const updateDeclarationStatus = ({
    id,
    status,
  }: {
    id: string;
    status: String;
  }) => {
    dispatch({ type: UPDATE_DECLARATION_STATUS, data: { id, status } });
  };
  return (
    <ApplicationContext.Provider
      value={{ state, updateDeclarations, updateDeclarationStatus }}
    >
      {children}
    </ApplicationContext.Provider>
  );
}

export default ApplicationContextProvider;
