import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import * as S from "./index.styles";
import { Link } from "react-router-dom";

const schema = yup
  .object({
    firstName: yup
      .string()
      .min(3, "Your first name should be at least 3 characters.")
      .max(30, "Your first name cannot be longer than 30 characters.")
      .required("Please enter your first name"),
    lastName: yup
      .string()
      .min(3, "Your last name should be at least 3 characters.")
      .max(30, "Your last name cannot be longer than 30 characters.")
      .required("Please enter your last name"),
    email: yup
      .string()
      .email("Please type in a valid email address.")
      .required("An email address is required."),
    subject: yup
      .string()
      .min(3, "Your subject should be at least 3 characters.")
      .required("Please type in a subject."),
    text: yup
      .string()
      .min(3, "Your text should contain at least 3 characters.")
      .required(),
  })
  .required();

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <S.ContactContainer>
      <S.Breadcrumbs>
        <Link to={"/"}>Home</Link>
        <p>/ Contact</p>
      </S.Breadcrumbs>
      <S.ContactForm onSubmit={handleSubmit(onSubmit)}>
        <h1>Get in touch!</h1>
          <label>First name</label>
          <S.Input
            {...register("firstName")}
            id="outlined-textarea"
            label="First name"
            placeholder="Type your first name"
          />
          {isSubmitted && errors.firstName && (
            <S.ErrorMsg>{errors.firstName?.message}</S.ErrorMsg>
          )}
          <label>Last name</label>
          <S.Input
            {...register("lastName")}
            id="outlined-textarea"
            label="Last name"
            placeholder="Type your last name"
          />
          {isSubmitted && errors.lastName && (
            <S.ErrorMsg>{errors.lastName?.message}</S.ErrorMsg>
          )}
          <label>Email address</label>
          <S.Input
            {...register("email")}
            id="outlined-textarea"
            label="Email"
            placeholder="name@example.com"
          />
          {isSubmitted && errors.email && (
            <S.ErrorMsg>{errors.email?.message}</S.ErrorMsg>
          )}
          <label>Subject</label>
          <S.Input
            {...register("subject")}
            id="outlined-textarea"
            label="Subject"
            placeholder="Type in your Subject"
          />
          {isSubmitted && errors.subject && (
            <S.ErrorMsg>{errors.subject?.message}</S.ErrorMsg>
          )}
          <label>Text</label>
          <S.Input
            {...register("text")}
            label="Text area"
            placeholder="Text area"
            rows={5}
          />
          {isSubmitted && errors.text && (
            <S.ErrorMsg>{errors.text?.message}</S.ErrorMsg>
          )}
        <S.SubmitButton type="submit" />
      </S.ContactForm>
    </S.ContactContainer>
  );
}

export default ContactForm;
