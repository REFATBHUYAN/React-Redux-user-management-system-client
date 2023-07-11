import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { allUsers, deleteUser } from "../features/usersSlice";

const AllUsers = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(allUsers());
  }, []);

  return (
    <div className="w-full md:w-3/4 mx-auto m-10 p-5 text-center">
      <Link to={"/create-user"} className="btn btn-outline mx-auto">
        Add User
      </Link>

      <div className="border border-blue-400 m-6 rounded-md p-5">
        {loading && <progress className="progress w-56"></progress>}
        {!loading && (
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {users.map((user) => (
                  <tr key={user._id}>
                    <th>{user._id}</th>
                    <td>{user.name}</td>
                    <td>
                      <Link
                        to={`/view-user/${user._id}`}
                        className="btn btn-outline"
                      >
                        View
                      </Link>
                      <Link
                        to={`/update-user/${user._id}`}
                        className="btn btn-outline btn-primary mx-5"
                      >
                        Edit
                      </Link>
                      <Link
                        className="btn btn-outline btn-secondary"
                        onClick={() => dispatch(deleteUser(user._id))}
                      >
                        Delete
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllUsers;
