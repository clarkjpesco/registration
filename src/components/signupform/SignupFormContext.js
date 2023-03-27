import React, { createContext, useContext, useState } from "react";

export const SignupFormContext = createContext();

export const useSignupForm = () => useContext(SignupFormContext);

export function SignupFormProvider({ children }) {
  const [personal, setPersonal] = useState({});
  const [parent, setParent] = useState({});
  const [course, setCourse] = useState({});

  return (
    <SignupFormContext.Provider
      value={{
        personal,
        setPersonal,
        parent,
        setParent,
        course,
        setCourse,
      }}
    >
      {children}
    </SignupFormContext.Provider>
  );
}
