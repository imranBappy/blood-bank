import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadDonor } from "../store/actions/donorAction";

const Card = (props) => {
  useEffect(() => {
    props.loadDonor(3);
  }, []);

  return (
    <>
      <div className="row mt-5">
        {props.donor.map((d, i) => (
          <div key={i} className="col-md-4 col-sm-12">
            <div className="card">
              <img
                src="/images/profile.png"
                className="card-img-top"
                alt="blood bonor"
              />
              <div className="card-body">
                <h5 className="card-title">{d.name}</h5>
                <p className="card-text">
                  {`${d.upazila}, ${d.zila}, ${d.division}`}
                </p>
                <a className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({ donor: state.donor });
export default connect(mapStateToProps, { loadDonor })(Card);
