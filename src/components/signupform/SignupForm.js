import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PersonalForm from "./1PersonalForm";
import MorePersonalForm from "./1MorePersonalForm";
import CitizenForm from "./1CitizenForm";
import ContactForm from "./2ContactForm";
import FatherForm from "./3FatherForm";
import MotherForm from "./3MotherForm";
import CourseForm from "./4CourseForm";
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
            <Route path='/' element={<PersonalForm />} />
            <Route path='/more' element={<MorePersonalForm />} />
            <Route path='/citizen' element={<CitizenForm />} />
            <Route path='/contact' element={<ContactForm />} />
            <Route path='/father' element={<FatherForm />} />
            <Route path='/mother' element={<MotherForm />} />
            <Route path='/course' element={<CourseForm />} />
            <Route path='/review' element={<Review />} />
          </Routes>
        </AnimatePresence>
      </div>
    </SignupFormProvider>
  );
};

export default SignupForm;
