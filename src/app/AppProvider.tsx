"use client";
import { ReactNode, useContext, useState } from "react";
import { createContext } from "react";

const AppContext = createContext({
  sessionToken: "",
  setSessionToken: (sessionToken: string) => {}
})

export const useAppContext = () => {
  const context = useContext(AppContext);
  if(!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}

export default function AppProvider({
  children,
  initialSessionToken = ''
}: {
  children: ReactNode,
  initialSessionToken?: string
}) 
{
  const [sessionToken, setSessionToken] = useState(initialSessionToken);
  return (
    <AppContext.Provider value={{ sessionToken, setSessionToken }}>
      {children}
    </AppContext.Provider>
  );
}
