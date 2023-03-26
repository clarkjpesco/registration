import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Animator from "./Animator";
import { useSignupForm } from "./SignupFormContext";

const FatherForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const { father, setFather } = useSignupForm();

  function onSubmit(data) {
    setFather(data);
    navigate("/mother");
  }
  return (
    <Animator>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <h2>About your father</h2>
        <input
          type='text'
          name='father_lastname'
          placeholder="What's your father last name?"
          defaultValue={father.father_lastname}
          {...register("father_lastname", { required: true })}
        />
        <p>{errors.father_lastname && "Last name is required"}</p>
        <input
          type='text'
          name='father_firstname'
          placeholder="What's your father first name?"
          defaultValue={father.father_firstname}
          {...register("father_firstname", { required: true })}
        />
        <p>{errors.father_firstname && "First name is required"}</p>
        <input
          type='text'
          name='father_phone'
          placeholder='Contact Number'
          defaultValue={father.father_phone}
          {...register("father_phone", { required: true })}
        />
        <p>{errors.father_phone && "Phone number is required"}</p>

        <input
          type='text'
          name='father_address'
          placeholder='Present Address'
          defaultValue={father.father_address}
          {...register("father_address", { required: true })}
        />
        <p>{errors.father_address && "Present Address is required"}</p>

        <input type='submit' value='Next' />
      </form>
    </Animator>
  );
};

export default FatherForm;
