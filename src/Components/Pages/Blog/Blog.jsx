import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="mt-10">
      <div className="w-3/4 mx-auto text-center ">
        <h1 className="text-3xl font-bold md:text-5xl my-5 ">
          Latest from the Blog
        </h1>
        <p>
          It sounds like you're looking for inspiration for a tourist blog.
          Here's a short description for various types of tourist destinations
          that could serve as inspiration for your blog.
        </p>

        <div className="flex justify-center mt-5">
          <Link to="/addblog" className=" btn btn-outline btn-success">
            Add Blog
          </Link>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Blog;
