const PostCard = ({ title, date, tags, description }) => {
  return (
    <div className="rounded-md bg-white p-6 shadow-md">
      <h3 className="text-2xl font-bold text-[#21243D]">{title}</h3>
      <div className="mt-4 flex items-center text-lg text-[#21243D]">
        <span>{date}</span>
        <span className="mx-4">|</span>
        <span>{tags}</span>
      </div>
      <p className="mt-4 text-base text-[#21243D]">{description}</p>
    </div>
  );
};

const RecentPosts = () => {
  return (
    <section className="bg-[#EDF7FA] py-20">
      <div className="mb-8 items-center justify-between text-center md:flex">
        <h2 className="text-2xl text-[#21243D]">Recent posts</h2>
        <a href="#" className="hidden text-base text-[#00A8CC] md:block">
          View all
        </a>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <PostCard
          title="Making a design system from scratch"
          date="12 Feb 2020"
          tags="Design, Pattern"
          description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        />
        <PostCard
          title="Creating pixel perfect icons in Figma"
          date="12 Feb 2020"
          tags="Figma, Icon Design"
          description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        />
      </div>
    </section>
  );
};

export default RecentPosts;
