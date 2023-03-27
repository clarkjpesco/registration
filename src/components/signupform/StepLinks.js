import React from "react";
import { NavLink } from "react-router-dom";
import { useSignupForm } from "./SignupFormContext";

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

const StepLinks = () => {
  const { personal, parent, course } = useSignupForm();

  const isPersonalDone = !isEmpty(personal);
  const isParentDone = !isEmpty(parent);
  const isCourseDone = !isEmpty(course);

  return (
    <div className='step-links'>
      <NavLink to='/registration'>
        {isPersonalDone ? "🟢" : "🔴"}Personal <span />{" "}
      </NavLink>

      {isPersonalDone ? (
        <NavLink to='/parents'>
          {isParentDone ? "🟢" : "🔴"}Parents <span />
        </NavLink>
      ) : (
        <a>
          Parent <span />
        </a>
      )}

      {isPersonalDone && isParentDone ? (
        <NavLink to='/course'>
          {isCourseDone ? "🟢" : "🔴"}Course <span />
        </NavLink>
      ) : (
        <a>
          Course <span />
        </a>
      )}

      {isPersonalDone && isParentDone && isCourseDone ? (
        <NavLink to='/review' style={{ float: "right" }}>
          Review <span />
        </NavLink>
      ) : (
        <a style={{ float: "right" }}>
          Review <span />
        </a>
      )}
    </div>
  );
};

export default StepLinks;
