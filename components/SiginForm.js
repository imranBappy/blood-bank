import React, { useState } from 'react';
import Link from 'next/link';

const SiginForm = () => {

    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const handleChange = e => {
        const name = e.target.name, value = e.target.value;
        setUser({ ...user, [name]: value })
    }
    const handleSubmit = e => {
        e.preventDefault()
        props.loginAction(user)
    }
    return (
        <div className="container">
            <div className="wrapper">
                <div className="title"><span>Login Form</span></div>
                <form className="form" action="#">
                    <div className="row">
                        <i className="uil uil-phone row__icon"></i>
                        <input className="row__input" type="email" placeholder="Enter your email" required />
                    </div>
                    <div className="row">
                        <i className="uil uil-lock row__icon"></i>
                        <input className="row__input password" type="password" placeholder="Enter your password" required />
                        <i className="uil uil-eye-slash showHidePw"></i>
                    </div>
                    <div className="pass">
                        <Link href="/reset"><a className="a">Forget Password?</a></Link>
                    </div>
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