import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { searchDonor } from "../store/actions/donorAction";
import { connect } from "react-redux";
import allUpazila from "../data/allUpaZila.json";
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
            <div className=" col-md-4 ">
              <input
                list="browsers"
                name="adddress"
                {...register("adddress")}
                className="form-control custom-select custom-select"
                id="adddress"
                placeholder="Type your Upazila ..."
              />
              <datalist id="browsers">
                {allUpazila.map((u) => (
                  <option key={u.id} value={u.name} />
                ))}
              </datalist>
            </div>
            <div className=" col-md-4">
              <input
                value="Filter"
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
