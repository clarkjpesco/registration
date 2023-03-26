import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PersonalForm from "./PersonalForm";
import MorePersonalForm from "./MorePersonalForm";
import CitizenForm from "./CitizenForm";
import ContactForm from "./ContactForm";
import FatherForm from "./FatherForm";
import MotherForm from "./MotherForm";
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
