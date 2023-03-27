import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Animator from "./Animator";
import { useSignupForm } from "./SignupFormContext";

import "./PersonalForm.styles.css";
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
    navigate("/parents");
  }
  return (
    <Animator>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <h2>PERSONAL INFORMATION</h2>
        <div className='personal-form-grid'>
          <div className='form-group'>
            <input
              type='text'
              name='lastname'
              placeholder='Last Name'
              defaultValue={personal.lastname}
              {...register("lastname", { required: true })}
            />
            <p>{errors.lastname && "Last Name is required"}</p>
          </div>
          <div className='form-group'>
            <input
              type='text'
              name='firstname'
              placeholder='First Name'
              defaultValue={personal.firstname}
              {...register("firstname", {
                required: true,
              })}
            />
            <p>{errors.firstname && "First Name is required"}</p>
          </div>
          <div className='form-group'>
            <input
              type='text'
              name='middlename'
              placeholder='Middle Name'
              defaultValue={personal.middlename}
              {...register("middlename", {
                required: true,
              })}
            />
            <p>{errors.middlename && "Middle Name is required"}</p>
          </div>

          <div className='form-group'>
            <input
              type='text'
              name='birthplace'
              placeholder='Birthplace'
              defaultValue={personal.birthplace}
              {...register("birthplace", {
                required: true,
              })}
            />
            <p>{errors.birthplace && "Birthplace is required"}</p>
          </div>
          <div className='form-group'>
            <input
              type='text'
              name='present_address'
              placeholder='Present Address'
              defaultValue={personal.present_address}
              {...register("present_address", {
                required: true,
              })}
            />
            <p>{errors.present_address && "Present Address is required"}</p>
          </div>

          <div className='form-group'>
            <select
              className='gender-select'
              name='gender'
              defaultValue={personal.gender}
              {...register("gender", { required: true })}
            >
              <option value=''>Gender</option>
              <option value='male'>Male</option>
              <option value='female'>Female</option>
              <option value='other'>Other</option>
            </select>
            <p>{errors.gender && "Gender is required"}</p>
          </div>

          <div className='form-group'>
            <input
              type='text'
              name='birthday'
              placeholder='Birthday'
              defaultValue={personal.birthday}
              onFocus={(e) => (e.target.type = "date")}
              {...register("birthday", {
                required: true,
              })}
            />
            <p>{errors.birthday && "Birthday is required"}</p>
          </div>

          <div className='form-group'>
            <select
              className='civilstatus-select'
              name='civilstatus'
              defaultValue={personal.civilstatus}
              {...register("civilstatus", { required: true })}
            >
              <option value=''>Civil Status</option>
              <option value='single'>Single</option>
              <option value='married'>Married</option>
              <option value='widowed'>Widowed</option>
              <option value='divorced'>Divorced</option>
            </select>
            <p>{errors.civilstatus && "Civil Status is required"}</p>
          </div>

          <div className='form-group'>
            <input
              type='text'
              name='nationality'
              placeholder='Nationality'
              defaultValue={personal.nationality}
              {...register("nationality", {
                required: true,
              })}
            />
            <p>{errors.nationality && "Nationality is required"}</p>
          </div>

          <div className='form-group'>
            <input
              type='text'
              name='religion'
              placeholder='Religion'
              defaultValue={personal.religion}
              {...register("religion", {
                required: true,
              })}
            />
            <p>{errors.religion && "Religion is required"}</p>
          </div>

          <div className='form-group'>
            <input
              type='text'
              name='mobile'
              placeholder='Mobile'
              defaultValue={personal.mobile}
              {...register("mobile", { required: true })}
            />
            <p>{errors.mobile && "Mobile is required"}</p>
          </div>

          <div className='form-group'>
            <input
              type='email'
              name='email'
              placeholder='Email'
              defaultValue={personal.email}
              {...register("email", {
                required: true,
                pattern:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />
            <p>{errors.email && "Valid Email is required"}</p>
          </div>
        </div>
        <input type='submit' value='Next' />
      </form>
    </Animator>
  );
};

export default PersonalForm;
