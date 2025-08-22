import { IconMenu, IconMenu2, IconPhoneCall, IconX } from "@tabler/icons-react";
import Logo from "../components/Logo";
import { navLinks } from "../constants";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const Header = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { backendUrl, setLoggedIn } = useContext(AuthContext);

  const handleLogout = async () => {
    const { data } = await axios.post(`${backendUrl}/api/auth/logout`);

    if (data.success) {
      setLoggedIn(false);
      navigate("/login");
    } else {
      alert("Error");
    }
  };

  return (
    <header className="fixed top-0 left-0 z-[100] w-screen bg-white text-zinc-900">
      <nav className="relative flex items-center justify-between w-full max-w-7xl mx-auto h-16">
        <Logo className="pl-6" />
        <IconMenu2
          className="absolute top-5 right-4 cursor-pointer min-[1024px]:hidden"
          onClick={() => setOpen(!open)}
        />
        <div
          className={`w-full flex flex-col lg:flex-row items-center max-[1024px]:bg-white gap-8 xl:gap-14 max-[1024px]:absolute left-0 ${
            open ? "-top-0" : "-top-[30rem]"
          } p-12 justify-center transition-[top] duration-500`}
        >
          {navLinks.map((link) => (
            <li key={link.id} className="list-none">
              <a
                href="#"
                className="relative after:absolute after:-bottom-1 after:left-0 after:content-[''] after:h-[3px] after:w-0 after:bg-orange transition after:duration-300 hover:after:w-1/2"
              >
                {link.name}
              </a>
            </li>
          ))}
          <div className="flex items-center gap-4">
            <img src="profile.png" alt="profile" className="w-10" />
            <button
              className="bg-orange text-white p-2 rounded-lg cursor-pointer hover:translate-y-1 hover:shadow-xl transition duration-300"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
          <IconX
            className="absolute top-4 right-4 cursor-pointer min-[1024px]:hidden"
            size={30}
            onClick={() => setOpen(false)}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
