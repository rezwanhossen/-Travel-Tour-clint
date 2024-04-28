import { useState } from "react";
import { useEffect } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import useAuth from "../../../Hook/useAuth";
const MyList = () => {
  const { user } = useAuth();
  const [lists, setlists] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5001/tourspot/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setlists(data);
      });
  }, []);
  return (
    <div>
      <div className=" text-center">
        <h1 className="text-3xl md:text-5xl font-bold">
          My list Tourists Spot
        </h1>
      </div>
      <div>
        <table className=" table">
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
                <button className=" btn bg-green-300">
                  <FiEdit />
                </button>
                <button className=" btn bg-red-400">
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
