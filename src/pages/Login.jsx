import { IconArrowNarrowRight, IconBriefcase } from "@tabler/icons-react";
import RightPanel from "../components/RightPanel";
import { Link, useNavigate } from "react-router-dom";
import SocialButton from "../components/SocialButton";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errorShow, setErrorShow] = useState(false);
  const { backendUrl, setUserData, setLoggedIn } = useContext(AuthContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const LoginForm = async (e) => {
    e.preventDefault();
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.post(`${backendUrl}/api/auth/login`, {
        email: formData.email,
        password: formData.password,
      });

      if (data.success) {
        setLoggedIn(true);
        navigate("/dashboard");
        toast.success("Login Successfull");
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <section className="w-full h-[90vh] grid lg:grid-cols-2 gap-10 max-w-7xl mx-auto pt-18">
      {/* logo  */}
      <div className="fixed top-0 left-8 bg-white w-full h-10 z-50">
        <span className="inline-flex gap-2 font-bold text-xl py-2">
          <IconBriefcase className="text-orange" size={30} />
          Jobpilot
        </span>
      </div>
      {/* Login Account */}
      <div className="flex flex-col items-start w-full m-auto">
        <div className="flex flex-col w-4/5 mx-auto text-left">
          <h1 className="text-3xl font-semibold">Sign in</h1>
          <span className="text-neutral-500 block">
            Don't have an account?{" "}
            <Link to="/" className="text-orange">
              Create Account
            </Link>
          </span>
          <form onSubmit={LoginForm} autoComplete="off" className="mt-2">
            {/* {errorShow && (
              <div className="bg-orange p-2 rounded-md text-white">
                <ul className="list-disc list-inside">
                  {errors.email && touched.email && <li>{errors.email}</li>}
                  {errors.password && touched.password && (
                    <li>{errors.password}</li>
                  )}
                </ul>
              </div>
            )} */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full border-2 border-neutral-400 focus:border-orange outline-0 p-2 px-4 mt-5 rounded"
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full border-2 border-neutral-400 focus:border-orange outline-0 p-2 px-4 mt-5 rounded"
            />

            <div className="flex items-center justify-between gap-2 mt-4">
              <div className="flex gap-2 items-center">
                <input type="checkbox" />
                <label htmlFor="terms" className="text-neutral-400">
                  Remember Me
                </label>
              </div>
              <Link to="/forgotpass" className="text-orange font-medium">
                Forgot Password?
              </Link>
            </div>
            <button
              type="submit"
              className="flex items-center justify-center gap-3 font-medium mt-6 bg-orange relative text-white p-4 rounded w-full cursor-pointer"
            >
              Sign In
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

export default Login;
