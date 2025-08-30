const WorkCard = ({ title, year, tags, description, image }) => {
  return (
    <div className="mb-8 flex flex-col md:flex-row gap-4 md:gap-8 border-b border-[#E0E0E0] pb-8">
      <img src={image} alt={title} className="w-full md:w-60 h-auto md:h-44 rounded-md object-cover" />
      <div>
        <h3 className="text-2xl md:text-3xl font-bold text-[#21243D]">{title}</h3>
        <div className="mt-2 md:mt-4 flex flex-wrap items-center">
          <span className="rounded-full bg-[#142850] px-3 md:px-4 py-1 text-sm md:text-lg font-black text-white">
            {year}
          </span>
          <span className="ml-4 md:ml-6 text-lg md:text-xl text-[#8695A4]">{tags}</span>
        </div>
        <p className="mt-2 md:mt-4 text-sm md:text-base text-[#21243D]">{description}</p>
      </div>
    </div>
  );
};

const FeaturedWorks = () => {
  return (
    <section className="py-20">
      <h2 className="mb-8 text-center text-2xl text-[#21243D] md:text-left">
        Featured works
      </h2>
      <div className="grid grid-cols-1 gap-8">
        <WorkCard
          title="Designing Dashboards"
          year="2020"
          tags="Dashboard"
          description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          image="/sig.png"
        />
        <WorkCard
          title="Vibrant Portraits of 2020"
          year="2018"
          tags="Illustration"
          description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          image="/yallapass.png"
        />
        <WorkCard
          title="36 Days of Malayalam type"
          year="2018"
          tags="Typography"
          description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          image="/northcoast.png"
        />
        <WorkCard
          title="36 Days of Malayalam type"
          year="2018"
          tags="Typography"
          description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          image="/moneymanger.png"
        />
      </div>
    </section>
  );
};

export default FeaturedWorks;
