import React, { useState } from 'react';
import Link from 'next/link';
import { useForm } from "react-hook-form";
const SiginForm = ({ register, handleSubmit, onSubmit, errors }) => {


    return (
        <div className="container">
            <div className="wrapper">
                <div className="title"><span>Login Form</span></div>
                <form onSubmit={handleSubmit(onSubmit)} className="form" action="#">
                    <div className="input_row">
                        <i className="uil uil-phone row__icon"></i>
                        <input {...register("email", { required: true })} className="row__input" type="email" placeholder="Enter your email" />
                    </div>
                    <div className="input_row">
                        <i className="uil uil-lock row__icon"></i>
                        <input {...register("password", { required: true, minLength: 5 })} className="row__input password" type="password" placeholder="Enter your password" />
                        <i className="uil uil-eye-slash showHidePw"></i>
                    </div>
                    <div className="pass">
                        <Link href="/reset"><a className="a">Forget Password?</a></Link>
                    </div>
                    {errors.password && <span className="error">This field is required</span>}
                    <div className="row button">
                        <input className="row__input" type="submit" value="Login" />
                    </div>
                    <div className="signup">Not a member?
                        <Link href="/signup"><a className="a">Signup now</a></Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SiginForm;