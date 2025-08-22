import { IconArrowNarrowRight, IconBriefcase } from "@tabler/icons-react";
import Logo from "../components/Logo";
import RightPanel from "../components/RightPanel";
import { Link, useNavigate } from "react-router-dom";
import SocialButton from "../components/SocialButton";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { date } from "yup";

const Register = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { backendUrl, setLoggedIn } = useContext(AuthContext);

  const handleFormSubmit = async (formData) => {
    try {
      axios.defaults.withCredentials = true;

      const { data } = await axios.post(
        `${backendUrl}/api/auth/register`,
        formData
      );

      if (data.success) {
        setLoggedIn(true);
        navigate("/dashboard");
        toast.success("Register Successfull");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="w-full h-[90vh] grid lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
      {/* logo  */}
      <div className="fixed top-0 left-8 bg-white w-full h-10 z-50">
        <span className="inline-flex gap-2 font-bold text-xl py-2">
          <IconBriefcase className="text-orange" size={30} />
          Jobpilot
        </span>
      </div>
      {/* create Account */}
      <div className="flex flex-col items-start w-full m-auto pt-20">
        <div className="flex flex-col w-4/5 mx-auto text-left">
          <h1 className="text-3xl font-semibold">Create account.</h1>
          <span className="text-neutral-500 block">
            Already have an account?{" "}
            <Link to="/login" className="text-orange">
              Login
            </Link>
          </span>
          <form
            onSubmit={handleSubmit(handleFormSubmit)}
            autoComplete="off"
            className="mt-8"
          >
            <input
              type="text"
              {...register("fullname")}
              placeholder="Full Name"
              className="border-2 border-gray relative focus:border-orange outline-0 rounded p-2 px-4 w-full"
            />
            <input
              type="email"
              {...register("email")}
              placeholder="Email Address"
              className="w-full border-2 border-gray focus:border-orange outline-0 p-2 px-4 mt-5 rounded"
            />
            <input
              type="password"
              {...register("password")}
              placeholder="Password"
              className="w-full border-2 border-gray focus:border-orange outline-0 p-2 px-4 mt-5 rounded"
            />
            <div className="flex items-center gap-2 mt-4 text-xs">
              <input type="checkbox" name="termscheck" />
              <label htmlFor="terms" className="text-neutral-400">
                I've read and agree with your&nbsp;
                <a href="#" className="text-orange font-medium">
                  Terms of Services
                </a>
              </label>
            </div>
            <button
              type="submit"
              className="flex items-center justify-center gap-3 font-medium mt-6 bg-orange border-orange text-white relative p-4 rounded w-full cursor-pointer"
            >
              Create Account
              <IconArrowNarrowRight />
            </button>
            <p className="my-6 text-neutral-400 text-center">OR</p>
            <SocialButton />
          </form>
        </div>
      </div>
      {/* right panel */}
      <RightPanel />
    </section>
  );
};

export default Register;
