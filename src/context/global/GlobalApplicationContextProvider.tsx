import { Declaration } from "@/types/Declaration";
import { Request } from "@/types/Request";
import { createContext, useReducer, useState } from "react";
import GlobalApplicationReducer from "./GlobalApplicationReducer";
import {
  APPLICATION_STATE,
  FILTER_REQUESTS,
  SET_REQUEST_STATUS,
  SET_REQUESTS,
  UPDATE_TITLE,
} from "@/utils";

type StateProps = {
  title: string;
  requestFilter?: string;
  requests: Request[];
  declarations: Declaration[];
};

type Props = {
  state: StateProps;
  filterRequests: (data: any) => void;
  setRequests: (data: any) => void;
  updateRequestStatus: (data: any) => void;
  updateTitle: (data: any) => void;
};

export const GlobalApplicationContext = createContext<Props>({} as Props);
function GlobalApplicationContextProvider({ children }: any) {
  /*
  const [state, setState] = useState<StateProps>({
    title: "Titre par défaut",
    requests: [],
    declarations: [],
  });
*/
  const [state, dispatch] = useReducer(
    GlobalApplicationReducer,
    APPLICATION_STATE
  );

  const updateTitle = (data: any) => {
    dispatch({ type: UPDATE_TITLE, data });
  };
  const setRequests = ({ requests }: StateProps) => {
    dispatch({ type: SET_REQUESTS, data: requests });
  };
  const updateRequestStatus = (data: any) => {
    dispatch({ type: SET_REQUEST_STATUS, data });
  };
  const filterRequests = (data: any) => {
    dispatch({ type: FILTER_REQUESTS, data });
  };
  return (
    <GlobalApplicationContext.Provider
      value={{
        state,
        filterRequests,
        updateRequestStatus,
        setRequests,
        updateTitle,
      }}
    >
      <section className="border-4 border-blue-400">{children}</section>
    </GlobalApplicationContext.Provider>
  );
}

export default GlobalApplicationContextProvider;
