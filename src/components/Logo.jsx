import { IconBriefcase } from "@tabler/icons-react";

const Logo = ({ className = "", children }) => {
  return (
    <div className={`top-0 w-max bg-white ${className}`}>
      <span className="inline-flex gap-2 font-bold text-xl py-2">
        <IconBriefcase className="text-orange" size={30} />
        Jobpilot
      </span>
      {children}
    </div>
  );
};

export default Logo;
