const WorkCard = ({
  title,
  year,
  tags,
  description,
  image,
}: {
  title: string;
  year: string;
  tags: string;
  description: string;
  image: string;
}) => {
  return (
    <div className="mb-8 flex flex-col gap-4 border-b border-[#E0E0E0] pb-8 md:flex-row md:gap-8">
      <img
        src={image}
        alt={title}
        className="h-auto w-full rounded-md object-cover md:h-44 md:w-60"
      />
      <div>
        <h3 className="text-2xl font-bold text-[#21243D] md:text-3xl">
          {title}
        </h3>
        <div className="mt-2 flex flex-wrap items-center md:mt-4">
          <span className="rounded-full bg-[#142850] px-3 py-1 text-sm font-black text-white md:px-4 md:text-lg">
            {year}
          </span>
          <span className="ml-4 text-lg text-[#8695A4] md:ml-6 md:text-xl">
            {tags}
          </span>
        </div>
        <p className="mt-2 text-sm text-[#21243D] md:mt-4 md:text-base">
          {description}
        </p>
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
          title="Signature Stays"
          year="2025"
          tags="Full-Stack-Developer"
          description="Signature Stays transforms private homes into five-star hospitality experiences. More than just property management, it’s a luxury lifestyle service—backed by a smart digital dashboard that gives owners full control while delivering guests a seamless, indulgent stay."
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
