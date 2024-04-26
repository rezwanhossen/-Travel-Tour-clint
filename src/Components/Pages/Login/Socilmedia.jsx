import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import useAuth from "../../../Hook/useAuth";
const Socilmedia = () => {
  const { googlelogin } = useAuth();
  return (
    <div>
      <div>
        <h5 className=" divider text-lg font-bold">Continue with</h5>
        <div className=" flex gap-3 justify-center">
          <button
            onClick={() => googlelogin()}
            className="btn btn-outline btn-accent text-2xl "
          >
            <FaGoogle />
          </button>
          <button className="btn text-2xl btn-outline btn-accent">
            <FaGithub />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Socilmedia;
