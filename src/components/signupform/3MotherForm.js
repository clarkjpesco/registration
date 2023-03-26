import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Animator from "./Animator";
import { useSignupForm } from "./SignupFormContext";

const MotherForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const { mother, setMother } = useSignupForm();

  function onSubmit(data) {
    setMother(data);
    navigate("/course");
  }
  return (
    <Animator>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <h2>About your mother</h2>
        <input
          type='text'
          name='mother_lastname'
          placeholder="What's your mother last name?"
          defaultValue={mother.mother_lastname}
          {...register("mother_lastname", { required: true })}
        />
        <p>{errors.mother_lastname && "Last name is required"}</p>
        <input
          type='text'
          name='mother_firstname'
          placeholder="What's your mother first name?"
          defaultValue={mother.mother_firstname}
          {...register("mother_firstname", { required: true })}
        />
        <p>{errors.mother_firstname && "First name is required"}</p>
        <input
          type='text'
          name='mother_phone'
          placeholder='Contact Number'
          defaultValue={mother.mother_phone}
          {...register("mother_phone", { required: true })}
        />
        <p>{errors.mother_phone && "Phone number is required"}</p>

        <input
          type='text'
          name='mother_address'
          placeholder='Present Address'
          defaultValue={mother.mother_address}
          {...register("mother_address", { required: true })}
        />
        <p>{errors.mother_address && "Present Address is required"}</p>

        <input type='submit' value='Next' />
      </form>
    </Animator>
  );
};

export default MotherForm;
