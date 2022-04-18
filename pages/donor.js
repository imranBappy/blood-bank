import React from 'react';
import { connect } from 'react-redux';
import Layout from '../components/Layout';
import { useRouter } from 'next/router'

const donor = (props) => {
    const router = useRouter()
    if (!props.user) {
        router.push("/")
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
export default connect(mapStateToProps)(donor);