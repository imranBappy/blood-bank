import { useState } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import { connect } from 'react-redux';
import { loginAction } from '../store/actions/authAction';
const login = (props) => {
    const [user, setUser] = useState({
        phone: "",
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
        <>
            <Layout title="Login">
                <form action="">
                    <div className="my-5 row">
                        <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Phone</label>
                        <div className="col-sm-10">
                            <input name="phone" onChange={handleChange} className="form-control" type="text" className="form-control" id="staticEmail" />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input name="password" onChange={handleChange} type="password" className="form-control" id="inputPassword" />
                        </div>
                    </div>
                    <div className="row mt-5">
                        <button onClick={handleSubmit} className="btn btn-primary">Login</button>
                    </div>
                    <Link href="/signup">
                        <a><p>Have a already account</p></a>
                    </Link>
                </form>
            </Layout>
        </>
    );
};

const mapStateToProps = state => ({
    user: {}
})
export default connect(mapStateToProps, { loginAction })(login);