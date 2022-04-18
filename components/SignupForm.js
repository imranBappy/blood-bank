import { connect } from 'react-redux';
import { registerAction } from '../store/actions/authAction';
import Link from 'next/link';
import InputFiled from "./InputFiled";

const SignupForm = ({ inputFled, register, handleSubmit, onSubmit, errors }) => {

    return (
        <div className="wrapper">
            <h2 className="h2">Registration</h2>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                {
                    inputFled.map((data, i) => <InputFiled
                        key={i}
                        data={data}
                        register={register}
                        errors={errors}
                    />)
                }
                <div className="text">
                    <h3 className="h3">Already have an account? <Link href="/login"><a className="a" >Login now</a></Link> </h3>
                </div>
            </form>
        </div>
    );
};
export default connect(null, { registerAction })(SignupForm);
