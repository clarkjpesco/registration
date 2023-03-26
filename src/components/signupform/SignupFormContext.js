import React, { createContext, useContext, useState } from "react";

export const SignupFormContext = createContext();

export const useSignupForm = () => useContext(SignupFormContext);

export function SignupFormProvider({ children }) {
  const [personal, setPersonal] = useState({});
  const [morepersonal, setMorePersonal] = useState({});
  const [citizen, setCitizen] = useState({});
  const [contact, setContact] = useState({});
  const [father, setFather] = useState({});
  const [mother, setMother] = useState({});
  const [course, setCourse] = useState({});

  return (
    <SignupFormContext.Provider
      value={{
        personal,
        setPersonal,
        morepersonal,
        setMorePersonal,
        citizen,
        setCitizen,
        contact,
        setContact,
        father,
        setFather,
        mother,
        setMother,
        course,
        setCourse,
      }}
    >
      {children}
    </SignupFormContext.Provider>
  );
}
