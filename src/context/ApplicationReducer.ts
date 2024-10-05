import {
  INITIAL_STATE,
  UPDATE_DECLARATION_STATUS,
  UPDATE_DECLARATIONS,
} from "@/utils";

function ApplicationReducer(state: any = INITIAL_STATE, action: any) {
  const { type, data } = action || {};

  switch (type) {
    case UPDATE_DECLARATIONS:
      state = {
        ...state,
        declarations: data,
      };
      break;

    case UPDATE_DECLARATION_STATUS:
      const { id: idToUpdate, status } = data;
      const declarations = state.declarations;

      const filteredDeclarations = declarations.filter(
        ({ id }: { id: string }) => id === idToUpdate
      );
      const declarationToUpdate = filteredDeclarations[0];

      const declarationsToKeep = declarations.filter(
        ({ id }: { id: string }) => id !== idToUpdate
      );
      
      state = {
        ...state,
        declarations: [
          ...declarationsToKeep,
          {
            ...declarationToUpdate,
            status: status,
          },
        ],
      };
      break;
  }

  return state;
}

export { ApplicationReducer };
