import { APPLICATION_STATE, APPLICATION_STATE_KEY, FILTER_REQUESTS, SET_REQUEST_STATUS, SET_REQUESTS, UPDATE_TITLE } from "@/utils";

function GlobalApplicationReducer(state: any = APPLICATION_STATE, action: any) {
  const { type, data } = action;
  const sessionState = sessionStorage.getItem(APPLICATION_STATE_KEY)
  if(sessionState) {
    state = JSON.parse(sessionState);
  }
  switch (type) {
    case SET_REQUESTS:
      state = { ...state, requests: data };
      break;
    case SET_REQUEST_STATUS:
      /// const requests = state.requests;
      const { requests } = state;
      const { id, status } = data;
      const requestToUpdate: Request = requests.filter(
        ({ id: requestId }: any) => requestId === id
      )[0];
      const requestsToKeep: Request[] = requests.filter(
        ({ id: requestId }: any) => requestId !== id
      );
      // [{id, nom, ...},{id, nom, ...},{id, nom, ...}, .., {id, nom, ..., status: ''}]
      const updatedRequests = [
        ...requestsToKeep,
        { ...requestToUpdate, status: status },
      ];
      state = { ...state, requests: updatedRequests };
      break;
      case UPDATE_TITLE:
        state = { ...state, title: data.title };
        break;
      case FILTER_REQUESTS:
        state = { ...state, requestFilter: data };
        break;
    }
  sessionStorage.setItem(APPLICATION_STATE_KEY, JSON.stringify(state));
  return state;
}

export default GlobalApplicationReducer;
