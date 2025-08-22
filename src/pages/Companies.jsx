import { companiesData } from "../constants";

const Companies = () => {
  return (
    <section className="bg-white w-full h-full  py-14 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-semibold mb-10">Most Popular Vacancies</h1>
        <div className="h-full grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          {companiesData.map((companyvacany) => {
            return (
              <div key={companyvacany.id}>
                <a
                  href="#"
                  className="font-medium hover:text-orange transition duration-300 block"
                >
                  {companyvacany.vacany}
                </a>
                <span className="text-sm text-neutral-400">
                  {companyvacany.position}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Companies;
