import { useState } from "react";
import { connect } from 'react-redux';
import { registerAction } from '../store/actions/authAction';
import { validateEmail, validateNumber } from '../utils/validator';
import Link from 'next/link';
const SignupForm = (props) => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: '',
        age: '',
        gender: '',
        blood: '',
        division: '',
        zila: '',
        upazilla: '',
        password: ''
    })
    const [isError, setIsError] = useState(true);
    const [error, setError] = useState({
        name: {
            message: '',
            error: false
        },
        email: {
            message: '',
            error: false
        },
        phone: {
            message: '',
            error: false
        },
        age: {
            message: '',
            error: false
        },
        gender: {
            message: '',
            error: false
        },
        blood: {
            message: '',
            error: false
        },
        division: {
            message: '',
            error: false
        },
        zila: {
            message: '',
            error: false
        },
        upazila: {
            message: '',
            error: false
        },
        gender: {
            message: '',
            error: false
        },
        blood: {
            message: '',
            error: false
        },
        password: {
            message: '',
            error: false
        },
        confirmPassword: {
            message: '',
            error: false
        },
    })
    const handleChange = e => {
        const name = e.target.name, value = e.target.value
        if (name === 'email' || name === 'phone' || name === 'username' || name === 'password') {
            setUser({ ...user, [name]: value.trim() })
        } else {
            setUser({ ...user, [name]: value })
        }
        if (name === 'name') {
            if (value.length > 2 && value.length < 20) {
                setError({
                    ...error, name: {
                        message: '',
                        error: false
                    }
                })
            } else {
                setError({
                    ...error, name: {
                        message: 'Must be at least 3 characters',
                        error: true
                    }
                })
                console.log(false, error);
            }
        } else if (name === 'email') {
            if (validateEmail(value)) {
                setError({
                    ...error, email: {
                        message: '',
                        error: false
                    }
                })
            } else {
                setError({
                    ...error, email: {
                        message: 'Invalid Email',
                        error: true
                    }
                })
            }
        } else if (name === 'phone') {
            if (validateNumber(value)) {
                setError({
                    ...error, phone: {
                        message: '',
                        error: false
                    }
                })
            } else {
                setError({
                    ...error, phone: {
                        message: 'Invalid Phone Number',
                        error: true
                    }
                })
            }
        }
        else if (name === 'age') {
            if (value > 17) {
                setError({
                    ...error, age: {
                        message: '',
                        error: false
                    }
                })
            } else {
                setError({
                    ...error, age: {
                        message: 'Your age minimum has to be 18',
                        error: true
                    }
                })
            }
        }
        else if (name === 'division') {
            if (value) {
                setError({
                    ...error, division: {
                        message: '',
                        error: false
                    }
                })
            } else {
                setError({
                    ...error, division: {
                        message: 'Please select Division',
                        error: true
                    }
                })
            }
        }
        else if (name === 'zila') {
            if (value) {
                setError({
                    ...error, zila: {
                        message: '',
                        error: false
                    }
                })
            } else {
                setError({
                    ...error, zila: {
                        message: 'Please select District',
                        error: true
                    }
                })
            }
        }
        else if (name === 'upazila') {
            if (value) {
                setError({
                    ...error, upazila: {
                        message: '',
                        error: false
                    }
                })
            } else {
                setError({
                    ...error, upazila: {
                        message: 'Please select Upazila',
                        error: true
                    }
                })
            }
        }
        else if (name === 'gender') {
            if (value) {
                setError({
                    ...error, gender: {
                        message: '',
                        error: false
                    }
                })
            } else {
                setError({
                    ...error, gender: {
                        message: 'Please select Gender',
                        error: true
                    }
                })
            }
        }
        else if (name === 'blood') {
            if (value) {
                setError({
                    ...error, gender: {
                        message: '',
                        error: false
                    }
                })
            } else {
                setError({
                    ...error, gender: {
                        message: 'Please select Gender',
                        error: true
                    }
                })
            }
        }
        else if (name === 'password') {
            if (value.length > 5) {
                setError({
                    ...error, password: {
                        message: '',
                        error: false
                    }
                })
            } else {
                setError({
                    ...error, password: {
                        message: 'Must be at least 6 characters',
                        error: true
                    }
                })
            }
        } else if (name === 'confirmPassword') {

            if (user.password === value) {
                setError({
                    ...error, confirmPassword: {
                        message: '',
                        error: false
                    }
                })
            } else {
                setError({
                    ...error, confirmPassword: {
                        message: 'Password Don\'t match',
                        error: true
                    }
                })
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(user);
        // props.registerAction(user);
    }

    return (
        <div className="wrapper">
            <h2 className="h2">Registration</h2>
            <form className="form" action="#">
                <div className="input__box">
                    <input onChange={handleChange} name="name" className="input" type="text" placeholder="Enter your name" required />
                    <p className="error">{error.name.message}</p>
                </div>
                <div className="input__box">
                    <input onChange={handleChange} name="email" className="input" type="email" placeholder="Enter your email" required />
                    <p className="error">{error.email.message}</p>

                </div>
                <div className="input__box">
                    <input onChange={handleChange} name="phone" className="input" type="text" placeholder="Enter your phone (+880)" required />
                    <p className="error">{error.phone.message}</p>
                </div>
                <div className="input__box">
                    <input onChange={handleChange} name="age" className="input" type="text" placeholder="Enter your age" required />
                    <p className="error">{error.age.message}</p>
                </div>
                <div className="input__box">
                    <select onChange={handleChange} name="division" className="select">
                        <option className="option" defaultValue="">Division</option>
                        <option className="option" defaultValue="Barishal">Barishal</option>
                        <option className="option" defaultValue="Khulna">Khulna</option>
                        <option className="option" defaultValue="Narail">Narail</option>
                    </select>
                    <p className="error">{error.division.message}</p>

                </div>
                <div className="input__box">
                    <select onChange={handleChange} name="zila" className="select">
                        <option className="option" defaultValue="">District</option>
                        <option className="option" defaultValue="District">Barishal</option>
                        <option className="option" defaultValue="District">Khulna</option>
                        <option className="option" defaultValue="District">Narail</option>
                    </select>
                    <p className="error">{error.zila.message}</p>

                </div>
                <div className="input__box">
                    <select onChange={handleChange} name="upazila" className="select">
                        <option className="option" defaultValue="">Upazila</option>
                        <option className="option" defaultValue="Pathorkata">Barishal</option>
                        <option className="option" defaultValue="x">Khulna</option>
                        <option className="option" defaultValue="y">Narail</option>
                    </select>
                    <p className="error">{error.upazila.message}</p>

                </div>

                <div className="input__box">
                    <select onChange={handleChange} name="gender" className="select">
                        <option className="option" defaultValue="">Gender</option>
                        <option className="option" defaultValue="male">Male</option>
                        <option className="option" defaultValue="female">Female</option>
                        <option className="option" defaultValue="other">Other</option>
                    </select>
                    <p className="error">{error.gender.message}</p>

                </div>
                <div className="input__box">
                    <select onChange={handleChange} name="blood" className="select">
                        <option className="option" defaultValue="">Select Blood Group</option>
                        <option className="option" defaultValue="AB+">AB+</option>
                        <option className="option" defaultValue="A+">A+</option>
                        <option className="option" defaultValue="A-">A-</option>
                        <option className="option" defaultValue="O+">O+</option>
                        <option className="option" defaultValue="B+">B+</option>
                        <option className="option" defaultValue="B-">B-</option>
                        <option className="option" defaultValue="O-">O-</option>
                        <option className="option" defaultValue="AB-">AB-</option>
                    </select>
                    <p className="error">{error.blood.message}</p>
                </div>

                <div className="input__box">
                    <input onChange={handleChange} name="password" className="input" type="password" placeholder="Create password" required />
                    <p className="error">{error.password.message}</p>

                </div>
                <div className="input__box">
                    <input onChange={handleChange} name="confirmPassword" className="input" type="password" placeholder="Confirm password" required />
                    <p className="error">{error.confirmPassword.message}</p>

                </div>

                <div className="policy">
                    <input type="checkbox" />
                    <h3 className="h3">I accept all terms & condition</h3>
                </div>
                <div className="input__box button">
                    <input onClick={handleSubmit} className="input" type="Submit" defaultValue="Register Now" />
                </div>
                <div className="text">
                    <h3 className="h3">Already have an account? <Link href="/login"><a className="a" >Login now</a></Link> </h3>
                </div>
            </form>
        </div>
    );
};
export default connect(null, { registerAction })(SignupForm);
