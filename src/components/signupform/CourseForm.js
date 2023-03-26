import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Animator from "./Animator";
import { useSignupForm } from "./SignupFormContext";

const CourseForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const { course, setCourse } = useSignupForm();

  function onSubmit(data) {
    setCourse(data);
    navigate("/review");
  }
  return (
    <Animator>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <h2>Course / Level Information</h2>

        <select
          className='course-select'
          name='course_name'
          defaultValue={course.course_name}
          {...register("course_name", { required: true })}
        >
          <option value=''>Select a course</option>
          <option value='bsn'>Bachelor of Science in Nursing</option>
          <option value='bsa'>Bachelor of Science in Accountancy</option>
          <option value='bsa'>
            Bachelor of Science in Business Addministration
          </option>
        </select>
        <p>{errors.course_name && "Course is required"}</p>
        <input
          type='text'
          name='course_major'
          placeholder="What's your Course Major?"
          defaultValue={course.course_major}
          {...register("course_major", { required: true })}
        />
        <p>{errors.course_major && "Course Major is required"}</p>
        <input
          type='text'
          name='course_yearlevel'
          placeholder="What's your Year Level?"
          defaultValue={course.course_yearlevel}
          {...register("course_yearlevel", { required: true })}
        />
        <p>{errors.course_yearlevel && "Year Level is required"}</p>

        <input type='submit' value='Next' />
      </form>
    </Animator>
  );
};

export default CourseForm;
