import React, {
  createContext,
  Dispatch,
  Reducer,
  useContext,
  useReducer,
} from "react";
import { UserInfo } from "firebase";

// TYPES AND INTERFACES

type AppActions = {
  type: "SET_USER" | "SET_ROOM";
  payload: any;
};

interface AppProps {
  user: UserInfo | null;
  room: Room | null;
}

interface AppProviderProps {
  reducer: Reducer<AppProps, AppActions>;
  initialState: AppProps;
  children: JSX.Element;
}

interface AppContextProps {
  state: AppProps;
  dispatch: Dispatch<AppActions>;
}

// REDUCER

export const AppReducer: Reducer<AppProps, AppActions> = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };

    case "SET_ROOM":
      return { ...state, room: action.payload };

    default:
      return state;
  }
};

// CONTEXT

export const appInitialState: AppProps = {
  //   user: null,
  user: {
    uid: "USERID12345",
    displayName: `Tester`,
    photoURL:
      "https://www.graphicsprings.com/filestorage/stencils/3f09542940267c887a5bcef0724cf3a4.png?width=500&height=500",
    email: null,
    phoneNumber: null,
    providerId: "client",
  },
  room: null,
};

export const AppContext = createContext({} as AppContextProps);

export const AppProvider: React.FC<AppProviderProps> = ({
  reducer,
  initialState,
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const { state, dispatch } = useContext(AppContext);
  return [state, dispatch] as const;
};
