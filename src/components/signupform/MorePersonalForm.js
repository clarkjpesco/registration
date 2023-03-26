import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Animator from "./Animator";
import { useSignupForm } from "./SignupFormContext";

const MorePersonalForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const { morepersonal, setMorePersonal } = useSignupForm();

  function onSubmit(data) {
    setMorePersonal(data);
    navigate("/citizen");
  }
  return (
    <Animator>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <h2>More about yourself</h2>

        <select
          className='gender-select'
          name='gender'
          defaultValue={morepersonal.gender}
          {...register("gender", { required: true })}
        >
          <option value=''>Gender</option>
          <option value='male'>Male</option>
          <option value='female'>Female</option>
          <option value='other'>Other</option>
        </select>
        <p>{errors.gender && "Gender is required"}</p>
        <select
          className='civilstatus-select'
          name='civilstatus'
          defaultValue={morepersonal.civilstatus}
          {...register("civilstatus", { required: true })}
        >
          <option value=''>Civil Status</option>
          <option value='single'>Single</option>
          <option value='married'>Married</option>
          <option value='widowed'>Widowed</option>
          <option value='divorced'>Divorced</option>
        </select>
        <p>{errors.civilstatus && "Civil Status is required"}</p>

        <input
          type='text'
          name='birthdate'
          placeholder='When is your birthdate?'
          defaultValue={morepersonal.birthdate}
          onFocus={(e) => (e.target.type = "date")}
          {...register("birthdate", {
            required: true,
          })}
        />
        <p>{errors.birthdate && "Birthdate is required"}</p>

        <input type='submit' value='Next' />
      </form>
    </Animator>
  );
};

export default MorePersonalForm;
