import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Animator from "./Animator";
import { useSignupForm } from "./SignupFormContext";

const CitizenForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const { citizen, setCitizen } = useSignupForm();

  function onSubmit(data) {
    setCitizen(data);
    navigate("/contact");
  }
  return (
    <Animator>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <h2>More about yourself</h2>
        <input
          type='text'
          name='nationality'
          placeholder="What's your nationality?"
          defaultValue={citizen.nationality}
          {...register("nationality", {
            required: true,
          })}
        />
        <p>{errors.nationality && "Nationality is required"}</p>

        <input
          type='text'
          name='religion'
          placeholder="What's your religion?"
          defaultValue={citizen.religion}
          {...register("religion", {
            required: true,
          })}
        />
        <p>{errors.religion && "Religion is required"}</p>

        <input type='submit' value='Next' />
      </form>
    </Animator>
  );
};

export default CitizenForm;
