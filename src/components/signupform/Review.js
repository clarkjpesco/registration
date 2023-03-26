import React from "react";
import Animator from "./Animator";
import { useSignupForm } from "./SignupFormContext";
const Review = () => {
  const { personal, morepersonal, citizen, contact, father, mother, course } =
    useSignupForm();

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      ...personal,
      ...morepersonal,
      ...citizen,
      ...contact,
      ...father,
      ...mother,
      ...course,
    };
    // axios.post('url-goes-here',data);
    console.log(data);
    alert("You are submitting! congrats!");
  }
  return (
    <Animator>
      <form onSubmit={handleSubmit}>
        <h2>Review all your info</h2>
        <p>
          🍕Personal🍕 <br />
          <strong>Full Name</strong>: {personal.lastname}, {personal.firstname}{" "}
          {personal.middlename} {personal.suffix} &nbsp;
          <strong>Gender</strong>: {morepersonal.gender} <br />
          <strong>Civil Status</strong>: {morepersonal.civilstatus} &nbsp;
          <strong>Birthdate</strong>: {morepersonal.birthdate} <br />
          <strong>Nationality</strong>:{citizen.nationality} &nbsp;{" "}
          <strong>Religion</strong>:{citizen.religion} <br />
          <strong>Phone</strong>:{contact.phone} &nbsp; <strong>Email</strong>:
          {contact.email} <br />
          <strong>Address</strong>:{contact.address}
        </p>

        <p>
          🍕Guardian🍕 <br />
          <strong>Father's Name</strong>: {father.father_lastname},
          {father.father_firstname} &nbsp; <strong>Phone</strong>:
          {father.father_phone}
          <br />
          <strong>Address</strong>:{father.father_address}
          <br />
          <strong>Mother's Name</strong>: {mother.mother_lastname},{" "}
          {mother.mother_firstname} &nbsp; <strong>Phone</strong>:
          {mother.mother_phone} <br />
          <strong>Address</strong>:{mother.mother_address}
        </p>

        <p>
          🍕Course/Level🍕 <br />
          <strong>Course</strong>: {course.course_name} <br />
          <strong>Major</strong>:{course.course_major} <br />
          <strong>Year Level</strong>:{course.course_yearlevel}
        </p>

        <input type='submit' value='Submit all info' />
      </form>
    </Animator>
  );
};

export default Review;
