import React, { useEffect } from "react";
import Donor from "../components/Donor";
import DonorList from "../components/DonorList";
import Layout from "../components/Layout";
import DonorSearch from "../components/DonorSearch";
import { loadDonor } from "../store/actions/donorAction";
import { connect } from "react-redux";
const donor = (props) => {
  useEffect(() => {
    props.loadDonor();
  }, []);
  console.log(props.donor);
  return (
    <>
      <Layout title="Blood Bank">
        <DonorSearch />
        <div className="donor__wrapper">
          <div className="donor__container">
            <DonorList>
              {props.donor.map((d, i) => (
                <Donor donor={d} key={i} id={i} />
              ))}
            </DonorList>
          </div>
        </div>
      </Layout>
    </>
  );
};
const mapStateToProps = (state) => ({
  donor: state.donor,
});
export default connect(mapStateToProps, { loadDonor })(donor);
