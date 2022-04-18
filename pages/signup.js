import Layout from "../components/Layout";
import SignupForm from "../components/SignupForm";
import inputTag from '../data/inputTag.json';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/router'
import { connect } from 'react-redux';
import { registerAction } from '../store/actions/authAction';
import * as Yup from 'yup'
function Signup(props) {
    const router = useRouter()
    const formSchema = Yup.object().shape({
        age: Yup.number()
            .required('Age is required')
            .min(18, 'You have must age 18'),
        phone: Yup.string()
            .required('Phone Number is required')
            .matches(
                /^\+?(88)?0?1[3456789][0-9]{8}\b/g,
                "Phone number is not valid"
            ),
        password: Yup.string()
            .required('Password is mendatory')
            .min(5, 'Password must be at 5 char long'),
        confirmPassword: Yup.string()
            .required('Password is mendatory')
            .oneOf([Yup.ref('password')], 'Passwords does not match'),
    })
    const formOptions = { resolver: yupResolver(formSchema) }
    const { register, handleSubmit, formState: { errors } } = useForm(formOptions);
    const onSubmit = data => {
        delete data.confirmPassword;
        delete data.agreed;
        props.registerAction(data, router)
    };

    return (
        <Layout title="Signup" addClass='body'>
            <SignupForm register={register} errors={errors} onSubmit={onSubmit} handleSubmit={handleSubmit} inputFled={inputTag} />
        </Layout>
    )
}
export default connect(null, { registerAction })(Signup);