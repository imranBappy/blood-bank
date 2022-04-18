import React from 'react';
import { connect } from 'react-redux';
import Layout from '../components/Layout';
import { useRouter } from 'next/router'

const Donor = (props) => {
    // const router = useRouter()
    if (!props.user.displayName) {
        // router.push("/")
        return;
    }
    return (
        <>
            <Layout title="Blood Donor">
                Blood Donor
            </Layout>
        </>
    );
};
const mapStateToProps = state => ({
    user: state.auth.user
})
export default connect(mapStateToProps)(Donor);