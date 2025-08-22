import { IconMapPin, IconSearch } from "@tabler/icons-react";
import Card from "../components/Card";
import { cardData } from "../constants";
import Companies from "./Companies";
import Work from "./Work";
import FeaturedJobs from "./FeaturedJobs";

const Dashboard = () => {
  return (
    <main className="min-h-screen w-screen bg-[#F7F7F8] py-10 overflow-hidden z-[2000]">
      <div className="grid lg:grid-cols-[auto_auto] w-full max-w-7xl z-50 place-items-center mx-auto pt-10">
        <div className="flex flex-col flex-wrap gap-5 lg:gap-8 items-start px-6">
          <h1 className="text-3xl font-semibold md:text-6xl sm:text-5xl min-[940px]:pr-10">
            Find a job that suits your interest & skills.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing. Lorem, ipsum.
          </p>
          <div className="grid md:grid-cols-2 min-[900px]:flex flex-wrap w-full gap-4 rounded lg:p-2 whitespace-nowrap">
            <div className="flex items-center gap-2 px-4 lg:px-6 bg-white">
              <IconSearch className="text-orange" />
              <input
                type="text"
                placeholder="Job title, Keyword..."
                className="p-2 outline-transparent"
              />
            </div>
            <div className="flex items-center gap-2 bg-white px-4 lg:px-6">
              <IconMapPin className="text-orange" />
              <input
                type="text"
                placeholder="Your Location"
                className="p-2 outline-transparent"
              />
            </div>
            <button className="bg-orange w-max text-white p-2 px-8 rounded cursor-pointer hover:translate-y-1 hover:shadow-xl transition duration-300">
              Find Job
            </button>
          </div>
          <p className="font-medium">
            <span className="text-neutral-400">Suggestion,</span>{" "}
            <span className="text-zinc-800">Designer</span>, Programming,{" "}
            <span className="text-orange">Digital Marketing, </span>
            Video, Animation.
          </p>
        </div>
        <div className="bg-[#F7F7F8] w-full">
          <img
            src="hero.png"
            alt="hero image"
            className="w-4/5 mx-auto sm:w-3/5 my-4 lg:w-full"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto lg:gap-14 pt-10 bg-[#F7F7F8] px-6 pb-14">
        {cardData.map((item) => {
          return (
            <Card key={item.id} className="bg-white shadow-sm">
              <div className="h-12 w-12 bg-orange/40 rounded-sm grid place-items-center">
                {item.icon}
              </div>
              <div className="flex flex-col">
                <span className="font-medium text-xl">{item.number}</span>
                <h1 className="text-neutral-400">{item.title}</h1>
              </div>
            </Card>
          );
        })}
      </div>
      <Companies />
      <Work />
      <FeaturedJobs />
    </main>
  );
};

export default Dashboard;
