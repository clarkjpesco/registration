import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PersonalForm from "./PersonalForm";
import ParentsForm from "./ParentsForm";
import CourseForm from "./CourseForm";
import Review from "./Review";
import { SignupFormProvider } from "./SignupFormContext";
import StepLinks from "./StepLinks";

const SignupForm = () => {
  const location = useLocation();

  return (
    <SignupFormProvider>
      <div className='signup-form'>
        <StepLinks />
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path='/registration' element={<PersonalForm />} />
            <Route path='/parents' element={<ParentsForm />} />
            <Route path='/course' element={<CourseForm />} />
            <Route path='/review' element={<Review />} />
          </Routes>
        </AnimatePresence>
      </div>
    </SignupFormProvider>
  );
};

export default SignupForm;
