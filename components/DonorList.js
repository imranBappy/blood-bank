import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useRouter } from "next/router";
const DonorList = (props) => {
  const router = useRouter();
  useEffect(() => {
    if (!props.user.displayName) {
      router.push("/");
    }
  }, [props.user.displayName, router]);
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
        <tbody>{props.children}</tbody>
      </table>
    </>
  );
};
const mapStateToProps = (state) => ({
  user: state.auth.user,
});
export default connect(mapStateToProps)(DonorList);
