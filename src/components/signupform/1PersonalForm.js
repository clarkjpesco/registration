import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Animator from "./Animator";
import { useSignupForm } from "./SignupFormContext";

const PersonalForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const { personal, setPersonal } = useSignupForm();

  function onSubmit(data) {
    setPersonal(data);
    navigate("/more");
  }
  return (
    <Animator>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <h2>Tell us about yourself</h2>

        <input
          type='text'
          name='lastname'
          placeholder="What's your lastname?"
          defaultValue={personal.lastname}
          {...register("lastname", { required: true })}
        />
        <p>{errors.lastname && "Last Name is required"}</p>
        <input
          type='text'
          name='firstname'
          placeholder="What's your firstname?"
          defaultValue={personal.firstname}
          {...register("firstname", {
            required: true,
          })}
        />
        <p>{errors.firstname && "First Name is required"}</p>

        <input
          type='text'
          name='middlename'
          placeholder="What's your middlename?"
          defaultValue={personal.middlename}
          {...register("middlename", {
            required: true,
          })}
        />
        <p>{errors.middlename && "Middle Name is required"}</p>
        <input
          type='text'
          name='suffix'
          placeholder='Have like Jr. or Sr in your name?'
          defaultValue={personal.suffix}
          {...register("suffix")}
        />
        <p>{errors.suffix && "Middle Name is required"}</p>
        <input type='submit' value='Next' />
      </form>
    </Animator>
  );
};

export default PersonalForm;
