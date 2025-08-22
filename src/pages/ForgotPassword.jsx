import { IconArrowNarrowRight } from "@tabler/icons-react";
import Logo from "../components/Logo";
import RightPanel from "../components/RightPanel";
import { Link } from "react-router-dom";
import SocialButton from "../components/SocialButton";

const ForgotPassword = () => {
  return (
    <section className="w-full h-[90vh] grid lg:grid-cols-2 gap-10 max-w-7xl mx-auto pt-18">
      <Logo className="fixed pl-9 sm:pl-18 lg:pl-12 xl:pl-15" />
      {/* Forgot Password */}
      <div className="flex flex-col items-start w-full m-auto">
        <div className="flex flex-col w-4/5 mx-auto text-left">
          <h1 className="text-3xl font-semibold">Forgot Password</h1>
          <span className="text-neutral-500 block mt-4">
            Go back to{" "}
            <Link to="/login" className="text-orange">
              Sign in
            </Link>
          </span>
          <span className="text-neutral-500 block">
            Don't have an account{" "}
            <Link to="/" className="text-orange">
              Create Account
            </Link>
          </span>
          <form>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border-2 border-neutral-400 focus:border-orange outline-0 p-2 px-4 mt-5 rounded"
            />

            <button
              type="submit"
              className="flex items-center justify-center gap-3 font-medium mt-6 bg-orange relative text-white p-4 rounded w-full cursor-pointer"
            >
              Reset Password
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

export default ForgotPassword;
