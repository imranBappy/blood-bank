import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import Donor from "./Donor";
import { loadDonor } from "../store/actions/donorAction";

const DonorList = (props) => {
  const router = useRouter();
  useEffect(() => {
    if (!props.user.displayName) {
      router.push("/");
    }
  }, [props.user.displayName, router]);
  useEffect(() => {
    props.loadDonor(20);
  }, []);
  return (
    <>
      <table className={`table table-dark table-striped`}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Blood</th>
            <th scope="col">Phone</th>
            <th scope="col">Address</th>
          </tr>
        </thead>
        <tbody>
          {props.donor.map((d, i) => (
            <Donor donor={d} key={i} id={i} />
          ))}
        </tbody>
      </table>
    </>
  );
};
const mapStateToProps = (state) => ({
  user: state.auth.user,
  donor: state.donor,
});
export default connect(mapStateToProps, { loadDonor })(DonorList);
