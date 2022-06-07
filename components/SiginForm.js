import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { loginAction } from "../store/actions/authAction";
import { connect } from "react-redux";
const SiginForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const onSubmit = (data) => {
    props.loginAction(data, router);
  };
  return (
    <div className="container">
      <div className="wrapper">
        <div className="title">Login Form</div>
        <form onSubmit={handleSubmit(onSubmit)} className="form" action="#">
          <div className="input_row">
            <input
              {...register("email", { required: true })}
              className="row__input"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="input_row">
            <input
              {...register("password", { required: true, minLength: 5 })}
              className="row__input password"
              type="password"
              placeholder="Enter your password"
            />
            <i className="uil uil-eye-slash showHidePw"></i>
          </div>
          <div className="pass">
            <Link href="/reset">
              <a className="a">Forget Password?</a>
            </Link>
          </div>
          {errors.password && (
            <span className="error">This field is required</span>
          )}
          <div className=" button">
            <input className="row__input" type="submit" value="Login" />
          </div>
          <div className="signup">
            Not a member?
            <Link href="/signup">
              <a className="a">Signup now</a>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default connect(null, { loginAction })(SiginForm);
