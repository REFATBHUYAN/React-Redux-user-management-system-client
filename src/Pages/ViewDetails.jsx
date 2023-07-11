import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ViewDetails = () => {
  const { id } = useParams();
  console.log(id);
  const { users } = useSelector((state) => state.app);
  const singleUser = users.find((user) => user._id === id);
  console.log(singleUser);
  const { _id, name, email, phone } = singleUser;
  return (
    <div className="w-1/2 mx-auto m-10 p-5">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>{_id}</th>
              <td>{name}</td>
              <td>{email}</td>
              <td>{phone}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewDetails;
