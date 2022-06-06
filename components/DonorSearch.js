import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { searchDonor } from "../store/actions/donorAction";
import { connect } from "react-redux";
const DonorSearch = (props) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    if (data.blood) {
      props.searchDonor(data.blood);
    }
  };
  return (
    <>
      <div className="mb-3">
        <form action="#" onSubmit={handleSubmit(onSubmit)}>
          <div className="row search__container">
            <div className="col-md-4">
              <select
                {...register("blood", { required: true })}
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Choose Blood Group...</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
            </div>
            <div className=" col-md-4">
              <input
                {...register("adddress")}
                className="form-control"
                list="datalistOptions"
                id="upazila"
                placeholder="Type your Upazila ..."
              />
              {/* {allUpaZila.map((u, i) => {
                return <option style={{ display: "none" }} key={i} value={u} />;
              })} */}
            </div>
            <div className=" col-md-4">
              <input
                value="Secarch"
                className="form-control bd-dark"
                type="submit"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default connect(null, { searchDonor })(DonorSearch);
