import { useState } from "react";
import { useEffect } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import useAuth from "../../../Hook/useAuth";
import Swal from "sweetalert2";
import { Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const MyList = () => {
  const { user, loding } = useAuth();
  const [lists, setlists] = useState([]);

  useEffect(() => {
    fetch(`https://assigment10-sarver-side.vercel.app/tourspot/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setlists(data);
      });
  }, []);

  const handelDelet = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assigment10-sarver-side.vercel.app/tourspot/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remain = lists.filter((lis) => lis._id != id);
              setlists(remain);
            }
          });
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>My lists</title>
      </Helmet>

      <div className=" text-center">
        <h1 className="text-3xl md:text-5xl font-bold">
          My list Tourists Spot
        </h1>
      </div>
      <div>
        <table
          data-aos="zoom-in"
          data-aos-delay="25"
          data-aos-duration="2000"
          className=" table"
        >
          <thead>
            <tr>
              <th>tourists spot name</th>
              <th>country_Name</th>
              <th>location</th>
              <th>Actions</th>
            </tr>
          </thead>

          {lists.map((list) => (
            <tr key={list._id}>
              <td>{list.spotName}</td>
              <td> {list.country}</td>
              <td>{list.location} </td>
              <td className=" flex gap-2">
                <Link to={`/updateturists/${list._id}`}>
                  <button className=" btn bg-green-300">
                    <FiEdit />
                  </button>
                </Link>

                <button
                  onClick={() => handelDelet(list._id)}
                  className=" btn bg-red-400"
                >
                  <MdDelete />
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default MyList;
