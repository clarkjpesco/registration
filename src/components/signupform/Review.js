import React from "react";
import Animator from "./Animator";
import { useSignupForm } from "./SignupFormContext";
const Review = () => {
  const { personal, parent, course } = useSignupForm();

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      ...personal,
      ...parent,
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
          {personal.middlename} &nbsp;
          <strong>Gender</strong>: {personal.gender} <br />
          <strong>Civil Status</strong>: {personal.civilstatus} &nbsp;
          <strong>Birthdate</strong>: {personal.birthdate} <br />
          <strong>Birthplace</strong>: {personal.birthplace} <br />
          <strong>Nationality</strong>:{personal.nationality} &nbsp;{" "}
          <strong>Religion</strong>:{personal.religion} <br />
          <strong>Mobile</strong>:{personal.mobile} &nbsp;{" "}
          <strong>Email</strong>:{personal.email} <br />
          <strong>Present Address</strong>:{personal.present_address}
        </p>

        <p>
          🍕Guardian🍕 <br />
          <strong>Father's Name</strong>: {parent.father_lastname},
          {parent.father_firstname} {parent.father_middlename} &nbsp;{" "}
          <strong>Mobile</strong>:{parent.father_mobile}
          <br />
          <strong>Present Address</strong>:{parent.father_present_address}
          <br />
          <strong>Mother's Name</strong>: {parent.mother_lastname},
          {parent.mother_firstname} {parent.mother_middlename}&nbsp;{" "}
          <strong>Mobile</strong>:{parent.mother_mobile} <br />
          <strong>Present Address</strong>:{parent.mother_present_address}
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
