import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { UserType } from "../types/userType";

interface ValueType {
  userData: UserType;
  setUserData: Dispatch<SetStateAction<UserType>>;
}

export const UsersProvider = createContext<Partial<ValueType>>({});

const UsersContext = ({ children }: { children: React.ReactNode }) => {
  const [userData, setUserData] = useState<UserType>({
    userUid: null,
    userName: "",
    email: "",
    password: "",
    profilePic: "",
    bio: "",
  });
  return (
    <UsersProvider.Provider value={{ userData, setUserData }}>
      {children}
    </UsersProvider.Provider>
  );
};

export default UsersContext;
