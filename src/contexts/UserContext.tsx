import React, {
  createContext,
  Dispatch,
  Reducer,
  useContext,
  useReducer,
} from "react";
import { UserInfo } from "firebase";

// TYPES AND INTERFACES

type UserActions = {
  type: "SET_USER" | "ADD_USER";
  payload: any;
};

interface UserProps {
  user: UserInfo | null;
}

interface UserProviderProps {
  reducer: Reducer<UserProps, UserActions>;
  initialState: UserProps;
  children: JSX.Element;
}

interface UserContextProps {
  state: UserProps;
  dispatch: Dispatch<UserActions>;
}

// REDUCER

export const UserReducer: Reducer<UserProps, UserActions> = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };

    default:
      return state;
  }
};

// CONTEXT

export const userInitialState: UserProps = {
  //   user: null,
  user: {
    uid: "TESTINGID12345",
    displayName: `Tester`,
    photoURL:
      "https://www.graphicsprings.com/filestorage/stencils/3f09542940267c887a5bcef0724cf3a4.png?width=500&height=500",
    email: null,
    phoneNumber: null,
    providerId: "client",
  },
};

export const UserContext = createContext({} as UserContextProps);

export const UserProvider: React.FC<UserProviderProps> = ({
  reducer,
  initialState,
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const { state, dispatch } = useContext(UserContext);
  return [state, dispatch] as const;
};
