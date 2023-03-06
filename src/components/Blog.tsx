import { blogPosts } from "../data/blogPosts";

const Blog = () => {
  return (
    <div id="blog" className="mx-auto max-w-7xl px-5 py-14 sm:px-10">
      <h1 className="text-2xl font-bold sm:text-3xl lg:text-4xl lg:leading-normal">
        Our Latest Blog
      </h1>
      <div className="mt-9 space-y-14">
        {blogPosts.map(({ title, date, banner, content, link }) => (
          <div key={title} className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-xl font-bold sm:text-2xl">{title}</h2>
              <p className="mt-3 text-gray-300">{date}</p>
              <p className="mt-8 text-gray-300">{content}</p>
              <a
                href={link}
                className="mt-6 flex w-fit border-b-2 border-yellow-deep"
              >
                Read More{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="#FFA028"
                  className="ml-2 h-7 w-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </a>
            </div>
            <img
              src={banner}
              alt={title}
              className="row-start-1 w-full sm:col-start-2"
            />
          </div>
        ))}
      </div>
      <a
        href=""
        className="mx-auto mt-12 block w-fit bg-peach-dark py-2 px-6 font-bold text-white sm:py-4 sm:px-8"
      >
        View More
      </a>
    </div>
  );
};

export default Blog;
