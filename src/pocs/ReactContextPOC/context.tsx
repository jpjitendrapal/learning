import { createContext, useReducer } from "react";

const initialStates = {
  theme: "light",
  stateInFile2: {},
  stateInFile3: {},
};
const Actions = {
  SET_THEME: "SET_THEME",
  SET_STATE_IN_FILE2: "SET_STATE_IN_FILE2",
  SET_STATE_IN_FILE3: "SET_STATE_IN_FILE3",
} as const;

type Action = {
  type: (typeof Actions)[keyof typeof Actions];
  payload: any;
};
const reducer = (state: any, action: Action) => {
  switch (action.type) {
    case Actions.SET_THEME:
      return { ...state, theme: action.payload };
    case Actions.SET_STATE_IN_FILE2:
      return { ...state, stateInFile2: action.payload };
    case Actions.SET_STATE_IN_FILE3:
      return { ...state, stateInFile3: action.payload };
    default:
      return state;
  }
};
type ContextType = {
  state: typeof initialStates;
  dispatch: React.Dispatch<Action>;
};
const pageContext = createContext<ContextType>({
  state: initialStates,
  dispatch: () => { },
});
const PageContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialStates);
  return (
    <pageContext.Provider value={{ state, dispatch }}>
      {children}
    </pageContext.Provider>
  );
};

export { pageContext, PageContextProvider };
