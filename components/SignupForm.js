import { connect } from "react-redux";
import { registerAction } from "../store/actions/authAction";
import Link from "next/link";
import InputFiled from "./InputFiled";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import * as Yup from "yup";
import { useContext, useEffect, useState } from "react";
import { LoadContext } from "./Layout";
import allDivision from "../data/allDivision.json";
import allZila from "../data/allZila.json";
import allUpaZila from "../data/allUpaZila.json";

const SignupForm = (props) => {
  const router = useRouter();
  const [selected, serSelected] = useState(false);
  const [, setLoading] = useContext(LoadContext);
  const formSchema = Yup.object().shape({
    age: Yup.number()
      .required("Age is required")
      .min(18, "You have must age 18"),
    phone: Yup.string()
      .required("Phone Number is required")
      .matches(/^\+?(88)?0?1[3456789][0-9]{8}\b/g, "Phone number is not valid"),
    password: Yup.string()
      .required("Password is mendatory")
      .min(5, "Password must be at 5 char long"),
    confirmPassword: Yup.string()
      .required("Password is mendatory")
      .oneOf([Yup.ref("password")], "Passwords does not match"),
  });
  const formOptions = { resolver: yupResolver(formSchema) };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);
  const [divisions, setDivisions] = useState([
    { id: "0", name: "Choose Division...", bn_name: "" },
  ]);
  const [zila, setZila] = useState([
    { id: "0", division_id: "0", name: " Choose zila...", bn_name: "" },
  ]);
  const [upzila, setUpzila] = useState([
    {
      id: "0",
      district_id: "",
      name: "Choose Upazila...",
      bn_name: "",
    },
  ]);

  useEffect(() => {
    setDivisions([...divisions, ...allDivision]);
    setZila([...zila, ...allZila]);
    setUpzila([...upzila, ...allUpaZila]);
  }, []);
  const handleAddress = (div) => {
    let id = div.target.value ? JSON.parse(div.target.value).id : "";
    if (div.target.name === "division") {
      const findZila = allZila.filter((z) => z.division_id === id);
      console.log({ findZila });
      setZila([zila[0], ...findZila]);
    } else if (div.target.name === "zila") {
      const findUpzila = allUpaZila.filter((z) => z.district_id === id);
      setUpzila([upzila[0], ...findUpzila]);
    }
  };

  const onSubmit = (data) => {
    setLoading(true);
    delete data.confirmPassword;
    delete data.agreed;
    data.division = JSON.parse(data.division).name;
    data.zila = JSON.parse(data.zila).name;
    data.upazila = JSON.parse(data.upazila).name;
    props.registerAction(data, router, setLoading);
  };
  return (
    <div className="wrapper">
      <h2 className="h2">Registration</h2>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        {props.inputFled.map((data, i) => {
          if (data.inputType === "address") {
            if (data.name === "division") {
              return (
                <InputFiled
                  option={divisions}
                  key={i}
                  data={data}
                  register={register}
                  errors={errors}
                  handleAddress={handleAddress}
                />
              );
            } else if (data.name === "zila") {
              return (
                <InputFiled
                  handleAddress={handleAddress}
                  option={zila}
                  key={i}
                  data={data}
                  register={register}
                  errors={errors}
                />
              );
            } else if (data.name === "upazila") {
              return (
                <InputFiled
                  option={upzila}
                  key={i}
                  data={data}
                  register={register}
                  errors={errors}
                />
              );
            }
          } else {
            return (
              <InputFiled
                option={[]}
                key={i}
                data={data}
                register={register}
                errors={errors}
              />
            );
          }
        })}
        <div className="text">
          <div className="signup">
            Already have an account?
            <Link href="/login">
              <a className="a">Login now</a>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};
export default connect(null, { registerAction })(SignupForm);
