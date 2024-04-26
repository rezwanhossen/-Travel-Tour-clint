import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import useAuth from "../../../Hook/useAuth";
import { useNavigate, useLocation } from "react-router-dom";

const Socilmedia = () => {
  const { googlelogin, githublogin } = useAuth();
  const naviget = useNavigate();

  const location = useLocation();

  const form = location.state || "/";

  const handelsocal = (socalpro) => {
    socalpro().then((result) => {
      if (result.user) {
        naviget(form);
      }
    });
  };
  return (
    <div>
      <div>
        <h5 className=" divider text-lg font-bold">Continue with</h5>
        <div className=" flex gap-3 justify-center">
          <button
            onClick={() => handelsocal(googlelogin)}
            className="btn btn-outline btn-accent text-2xl "
          >
            <FaGoogle />
          </button>
          <button
            onClick={() => handelsocal(githublogin)}
            className="btn text-2xl btn-outline btn-accent"
          >
            <FaGithub />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Socilmedia;
