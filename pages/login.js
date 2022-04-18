import { useState } from 'react';
import Layout from '../components/Layout';
import { connect } from 'react-redux';
import { loginAction } from '../store/actions/authAction';
import SiginForm from '../components/SiginForm';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router'

const Login = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const router = useRouter()
    const onSubmit = (data) => {
        props.loginAction(data, router)
    }
    return (
        <>
            <Layout title="Login" addClass="body">
                <SiginForm register={register} errors={errors} onSubmit={onSubmit} handleSubmit={handleSubmit} />
            </Layout>
        </>
    );
};

export default connect(null, { loginAction })(Login);