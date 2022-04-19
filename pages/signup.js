import SignupForm from "../components/SignupForm";
import inputTag from '../data/inputTag.json';

import { connect } from 'react-redux';
import { registerAction } from '../store/actions/authAction';
import Layout from "../components/Layout";
import { analytics } from "../store/firebase";
import { useEffect } from "react";
import { logEvent } from "firebase/analytics";

function Signup(props) {
    logEvent(analytics, 'notification_received');
    return (
        <Layout title="Signup" addClass='body'>
            <SignupForm inputFled={inputTag} />
        </Layout>
    )
}
export default connect(null, { registerAction })(Signup);