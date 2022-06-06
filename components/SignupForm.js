import { connect } from "react-redux";
import { registerAction } from "../store/actions/authAction";
import Link from "next/link";
import InputFiled from "./InputFiled";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import * as Yup from "yup";
import { useContext, useEffect } from "react";
import { LoadContext } from "./Layout";

const SignupForm = (props) => {
  const router = useRouter();
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

  const onSubmit = (data) => {
    delete data.confirmPassword;
    delete data.agreed;
    props.registerAction(data, router, setLoading);
    setLoading(false);
  };
  return (
    <div className="wrapper">
      <h2 className="h2">Registration</h2>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        {props.inputFled.map((data, i) => (
          <InputFiled key={i} data={data} register={register} errors={errors} />
        ))}
        <div className="text">
          <h3 className="h3">
            Already have an account?{" "}
            <Link href="/login">
              <a className="a">Login now</a>
            </Link>{" "}
          </h3>
        </div>
      </form>
    </div>
  );
};
export default connect(null, { registerAction })(SignupForm);
