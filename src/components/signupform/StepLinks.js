import React from "react";
import { NavLink } from "react-router-dom";
import { useSignupForm } from "./SignupFormContext";

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

const StepLinks = () => {
  const { personal, morepersonal, citizen, contact, father, mother, course } =
    useSignupForm();

  const isPersonalDone = !isEmpty(personal);
  const isMorePersonalDone = !isEmpty(morepersonal);
  const isCitizenDone = !isEmpty(citizen);
  const isContactDone = !isEmpty(contact);
  const isFatherDone = !isEmpty(father);
  const isMotherDone = !isEmpty(mother);
  const isCourseDone = !isEmpty(course);

  return (
    <div className='step-links'>
      <NavLink to='/registration'>
        {isPersonalDone ? "🟢" : "🔴"}Personal <span />{" "}
      </NavLink>
      {isPersonalDone ? (
        <NavLink to='/more'>
          {isMorePersonalDone ? "🟢" : "🔴"}More <span />
        </NavLink>
      ) : (
        <a>
          More <span />
        </a>
      )}
      {isPersonalDone && isMorePersonalDone ? (
        <NavLink to='/citizen'>
          {isCitizenDone ? "🟢" : "🔴"}Citizen <span />
        </NavLink>
      ) : (
        <a>
          Citizen <span />
        </a>
      )}

      {isPersonalDone && isMorePersonalDone && isCitizenDone ? (
        <NavLink to='/contact'>
          {isContactDone ? "🟢" : "🔴"}Contact <span />
        </NavLink>
      ) : (
        <a>
          Contact <span />
        </a>
      )}
      {isPersonalDone &&
      isMorePersonalDone &&
      isCitizenDone &&
      isContactDone ? (
        <NavLink to='/father'>
          {isFatherDone ? "🟢" : "🔴"}Father <span />
        </NavLink>
      ) : (
        <a>
          Father <span />
        </a>
      )}
      {isPersonalDone &&
      isMorePersonalDone &&
      isCitizenDone &&
      isContactDone &&
      isFatherDone ? (
        <NavLink to='/mother'>
          {isMotherDone ? "🟢" : "🔴"}Mother <span />
        </NavLink>
      ) : (
        <a>
          Mother <span />
        </a>
      )}
      {isPersonalDone &&
      isMorePersonalDone &&
      isCitizenDone &&
      isContactDone &&
      isFatherDone &&
      isMotherDone ? (
        <NavLink to='/course'>
          {isCourseDone ? "🟢" : "🔴"}Course <span />
        </NavLink>
      ) : (
        <a>
          Course <span />
        </a>
      )}

      {isPersonalDone &&
      isMorePersonalDone &&
      isCitizenDone &&
      isContactDone &&
      isFatherDone &&
      isMotherDone &&
      isCourseDone ? (
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
