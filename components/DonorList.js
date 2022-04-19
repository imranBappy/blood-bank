import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useRouter } from 'next/router'

const DonorList = (props) => {
    const router = useRouter()
    useEffect(() => {
        if (!props.user.displayName) {
            router.push('/')
        }
    }, [])
    return (
        <div>
            <h1>Donor</h1>
        </div>
    );
};
const mapStateToProps = state => ({
    user: state.auth.user
})
export default connect(mapStateToProps)(DonorList);