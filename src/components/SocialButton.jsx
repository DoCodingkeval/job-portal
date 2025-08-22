const SocialButton = () => {
  return (
    <div className="flex flex-col lg:flex-row whitespace-nowrap items-center justify-center gap-4 md:gap-6 mt-6 text-sm">
      <button className="border border-neutral-300 w-full p-2 flex items-center cursor-pointer justify-center gap-2 rounded">
        <img
          className="w-5"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/facebook/facebook-original.svg"
        />
        Sign in with Facebook
      </button>
      <button className="border border-neutral-300 w-full p-2 flex items-center cursor-pointer justify-center gap-2 rounded">
        <img
          className="w-5"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg"
        />
        Sign in with Google
      </button>
    </div>
  );
};

export default SocialButton;
