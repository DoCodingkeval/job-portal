import { IconUserPlus } from "@tabler/icons-react";
import Card from "../components/Card";
import { workSetupData } from "../constants";

const Work = () => {
  return (
    <section className="w-full h-full bg-[#F7F7F8] py-14 px-6">
      <div className="h-full w-full max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
        <h1 className="text-2xl font-semibold ">How Jobpilot work</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 lg:gap-8 relative">
          {workSetupData.map((work) => {
            return (
              <Card
                key={work.id}
                className="flex-col my-10 hover:bg-white rounded-lg transition duration-300"
              >
                <div className="h-14 w-14 grid place-items-center text-orange bg-white rounded-full p-2">
                  {work.icon}
                </div>
                <h2 className="font-medium">{work.step}</h2>
                <p>{work.desc}</p>
              </Card>
            );
          })}
          {/* <img
            src="arrow.png"
            alt="arrow"
            className="absolute w-36 top-90 left-4 lg:left-50 lg:top-10 -rotate-[20deg]"
          />
          <img
            src="arrow-down.png"
            alt="arrow"
            className="absolute w-36 lg:left-120 top-20 rotate-[16deg]"
          />
          <img
            src="arrow.png"
            alt="arrow"
            className="absolute w-36 left-4 lg:right-55 top-10 -rotate-[8deg]"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default Work;
