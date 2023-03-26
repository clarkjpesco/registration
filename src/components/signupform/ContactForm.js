import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Animator from "./Animator";
import { useSignupForm } from "./SignupFormContext";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const { contact, setContact } = useSignupForm();

  function onSubmit(data) {
    setContact(data);
    navigate("/father");
  }
  return (
    <Animator>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <h2>How can we reach you?</h2>
        <input
          type='text'
          name='phone'
          placeholder="What's your phone number?"
          defaultValue={contact.phone}
          {...register("phone", { required: true })}
        />
        <p>{errors.phone && "Phone number is required"}</p>
        <input
          type='email'
          name='email'
          placeholder="What's your email?"
          defaultValue={contact.email}
          {...register("email", {
            required: true,
            pattern:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
        />
        <p>{errors.email && "Valid email is required"}</p>

        <input
          type='text'
          name='address'
          placeholder='Where do you live?'
          defaultValue={contact.address}
          {...register("address", {
            required: true,
          })}
        />
        <p>{errors.address && "Address is required"}</p>

        <input type='submit' value='Next' />
      </form>
    </Animator>
  );
};

export default ContactForm;
