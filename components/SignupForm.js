import { useState } from "react";
import Form from "./Form";
import { connect } from 'react-redux';
import { registerAction } from '../store/actions/authAction';
const SignupForm = (props) => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: '',
        ref: '',
        age: '',
        gender: '',
        blood: '',
        division: '',
        zila: '',
        upazilla: '',
        password: ''
    })
    const handleChange = (e) => {
        let name = e.target.name, value = e.target.value;
        setUser({ ...user, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        props.registerAction(user);
    }

    return (
        <Form>
            <div><input onChange={handleChange} placeholder="Name" name="name" type="text" required /></div>
            <div><input onChange={handleChange} placeholder="Email" name="email" type="email" required /></div>
            <div><input onChange={handleChange} placeholder="Phone" name="phone" type="text" required /></div>
            <div><input onChange={handleChange} placeholder="Reference" name="ref" value="000" type="text" required /></div>
            <div><input onChange={handleChange} placeholder="Age" name="age" type="text" required /></div>
            <div><input onChange={handleChange} placeholder="Gender" name="gender" type="text" required /></div>
            <div><input onChange={handleChange} placeholder="Blood Group" name="blood" type="text" required /></div>
            <div><input onChange={handleChange} placeholder="Division" name="division" type="text" required /></div>
            <div><input onChange={handleChange} placeholder="zila" name="zila" type="text" required /></div>
            <div><input onChange={handleChange} placeholder="upazilla" name="upazilla" type="text" required /></div>
            <div><input onChange={handleChange} placeholder="password" name="password" type="text" required /></div>
            <button onClick={handleSubmit}>Submit</button>
        </Form>
    );
};
export default connect(null, { registerAction })(SignupForm);
