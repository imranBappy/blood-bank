import React from 'react';
import DonorList from '../components/DonorList';
import Layout from '../components/Layout';

const donor = (props) => {

    return (
        <>
            <Layout title="Blood d">
                <DonorList />
            </Layout>
        </>
    );
};

export default donor;