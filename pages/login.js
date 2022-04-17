import { useState } from 'react';
import Layout from '../components/Layout';
import { connect } from 'react-redux';
import { loginAction } from '../store/actions/authAction';
import SiginForm from '../components/SiginForm';
const login = (props) => {

    return (
        <>
            <Layout title="Login" addClass="body">
                <SiginForm />
            </Layout>
        </>
    );
};

export default connect(null, { loginAction })(login);