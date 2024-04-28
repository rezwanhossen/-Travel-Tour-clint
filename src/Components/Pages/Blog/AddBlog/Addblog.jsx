import useAuth from "../../../../Hook/useAuth";

const Addblog = () => {
  const { user } = useAuth();
  console.log(user);
  const handelBlog = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.img.value;
    const title = form.title.value;
    const blogdes = form.blogdes.value;
    const rating = form.rating.value;
    const Autname = user?.displayName;
    const email = user?.email;
    const autimg = user?.photoURL;

    const blog = {
      photo,
      title,
      blogdes,
      rating,
      Autname,
      autimg,
      email,
    };
    console.log(blog);
  };
  return (
    <div className=" mt-10">
      <div className="w-full md:w-4/6 mx-auto bg-gray-100 p-5 rounded-md ">
        <h1 className="text-2xl md:text-4xl font-bold text-center border-b-2 pb-3">
          Add Blog
        </h1>
        <form onSubmit={handelBlog}>
          <div>
            <p>Photo URL :</p>
            <input
              type="text"
              className=" input input-bordered w-full"
              placeholder="https://i.ibb.co/KWqdRJw/contuct.jpg"
              name="img"
              id=""
            />
          </div>
          <div className="flex gap-4 justify-between">
            <div className=" flex-1">
              <p>Blog title :</p>
              <input
                type="text"
                className=" input input-bordered w-full"
                placeholder="Write blog title"
                name="title"
                id=""
              />
            </div>
            <div className=" flex-1">
              <p>Blog Ratting :</p>
              <input
                type="text"
                className=" input input-bordered w-full"
                placeholder="blog rating"
                name="rating"
                id=""
              />
            </div>
          </div>
          <div>
            <p>Blog Description :</p>
            <input
              type="text"
              className=" input input-bordered w-full"
              placeholder="Write blog title"
              name="blogdes"
              id=""
            />
          </div>
          <input
            type="submit"
            value="Add Blog"
            className="btn btn-outline btn-success w-full mt-5"
          />
        </form>
      </div>
    </div>
  );
};

export default Addblog;
