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
                <option defaultValue="A+">A+</option>
                <option defaultValue="A-">A-</option>
                <option defaultValue="B+">B+</option>
                <option defaultValue="B-">B-</option>
                <option defaultValue="O+">O+</option>
                <option defaultValue="O-">O-</option>
                <option defaultValue="AB+">AB+</option>
                <option defaultValue="AB-">AB-</option>
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
