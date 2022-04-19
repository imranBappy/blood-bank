import SignupForm from "../components/SignupForm";
import inputTag from '../data/inputTag.json';

import { connect } from 'react-redux';
import { registerAction } from '../store/actions/authAction';
import Layout from "../components/Layout";
function Signup(props) {
    return (
        <Layout title="Signup" addClass='body'>
            <SignupForm inputFled={inputTag} />
        </Layout>
    )
}
export default connect(null, { registerAction })(Signup);