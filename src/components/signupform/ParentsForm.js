import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Animator from "./Animator";
import { useSignupForm } from "./SignupFormContext";

import "./ParentsForm.styles.css";
const ParentsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const { parent, setParent } = useSignupForm();

  function onSubmit(data) {
    setParent(data);
    navigate("/course");
  }
  return (
    <Animator>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <h2>PARENT'S INFORMATION</h2>
        <div className='parent-form-grid'>
          <div className='father-form'>
            <h3>FATHER:</h3>
            <div className='form-group'>
              <input
                type='text'
                name='father_lastname'
                placeholder='Last Name'
                defaultValue={parent.father_lastname}
                {...register("father_lastname", { required: true })}
              />
              <p>{errors.father_lastname && "Last name is required"}</p>
            </div>

            <div className='form-group'>
              <input
                type='text'
                name='father_firstname'
                placeholder='First Name'
                defaultValue={parent.father_firstname}
                {...register("father_firstname", { required: true })}
              />
              <p>{errors.father_firstname && "First Name is required"}</p>
            </div>

            <div className='form-group'>
              <input
                type='text'
                name='father_middlename'
                placeholder='Middle Name'
                defaultValue={parent.father_middlename}
                {...register("father_middlename", { required: true })}
              />
              <p>{errors.father_middlename && "Middle Name is required"}</p>
            </div>

            <div className='form-group'>
              <input
                type='text'
                name='father_mobile'
                placeholder='Mobile'
                defaultValue={parent.father_mobile}
                {...register("father_mobile", { required: true })}
              />
              <p>{errors.father_mobile && "Mobile is required"}</p>
            </div>

            <div className='form-group'>
              <input
                type='text'
                name='father_present_address'
                placeholder='Present Address'
                defaultValue={parent.father_present_address}
                {...register("father_present_address", { required: true })}
              />
              <p>
                {errors.father_present_address && "Present Address is required"}
              </p>
            </div>
          </div>

          <div className='mother-form'>
            <h3>MOTHER:</h3>
            <div className='form-group'>
              <input
                type='text'
                name='mother_lastname'
                placeholder='Last Name'
                defaultValue={parent.mother_lastname}
                {...register("mother_lastname", { required: true })}
              />
              <p>{errors.mother_lastname && "Last name is required"}</p>
            </div>

            <div className='form-group'>
              <input
                type='text'
                name='mother_firstname'
                placeholder='First Name'
                defaultValue={parent.mother_firstname}
                {...register("mother_firstname", { required: true })}
              />
              <p>{errors.mother_firstname && "First Name is required"}</p>
            </div>

            <div className='form-group'>
              <input
                type='text'
                name='mother_middlename'
                placeholder='Middle Name'
                defaultValue={parent.mother_middlename}
                {...register("mother_middlename", { required: true })}
              />
              <p>{errors.mother_middlename && "Middle Name is required"}</p>
            </div>

            <div className='form-group'>
              <input
                type='text'
                name='mother_mobile'
                placeholder='Mobile'
                defaultValue={parent.mother_mobile}
                {...register("mother_mobile", { required: true })}
              />
              <p>{errors.mother_mobile && "Mobile is required"}</p>
            </div>

            <div className='form-group'>
              <input
                type='text'
                name='mother_present_address'
                placeholder='Present Address'
                defaultValue={parent.mother_present_address}
                {...register("mother_present_address", { required: true })}
              />
              <p>
                {errors.mother_present_address && "Present Address is required"}
              </p>
            </div>
          </div>
        </div>

        <input type='submit' value='Next' />
      </form>
    </Animator>
  );
};

export default ParentsForm;
