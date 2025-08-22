import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Card from "../components/Card";
import { IconBookmark, IconBrandGoogle } from "@tabler/icons-react";

const companyImages = {
  google: "companylogos/google.svg",
  facebook: "companylogos/facebook.svg",
  amazon: "companylogos/amazon.svg",
  netflix: "companylogos/netflix.svg",
  microsoft: "companylogos/microsoft.svg",
  tesla: "companylogos/tesla.svg",
  adobe: "companylogos/adobe.svg",
  apple: "companylogos/apple.svg",
  spotify: "companylogos/spotify.svg",
  twitter: "companylogos/x.svg",
};

const FeaturedJobs = () => {
  const [data, setJobData] = useState([]);

  const { backendUrl } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`${backendUrl}/api/auth/jobs`)
      .then((jobs) => {
        setJobData(jobs.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="w-full h-full max-w-7xl mx-auto py-10 px-6">
      <h1 className="text-3xl lg:text-5xl font-semibold mb-6 lg:mb-10">
        Featured Job
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((job) => (
          <Card className="bg-white/90 flex-col items-start">
            <h1 className="font-semibold text-xl">{job.jobname}</h1>
            <div className="flex items-center gap-4 text-neutral-400">
              <span className="uppercase bg-green-100 text-green-700 font-bold text-sm px-2">
                {job.time}
              </span>
              Salary: &#8377;{job.salary}
            </div>
            <div className="flex gap-4 justify-between w-full items-center text-lg font-semibold capitalize">
              <div className="flex items-center gap-4">
                <img
                  className="h-10 bg-slate-200 w-10 p-2 rounded-xs"
                  src={companyImages[job.company.toLowerCase()]}
                />
                {job.company}
              </div>
              <IconBookmark className="cursor-pointer hover:fill-gray-300 transition-all duration-300" />
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FeaturedJobs;
