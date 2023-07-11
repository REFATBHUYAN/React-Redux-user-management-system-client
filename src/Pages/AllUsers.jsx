import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { allUsers } from "../features/usersSlice";

const AllUsers = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(allUsers());
  }, []);

  console.log(users);
  //   if (loading) {
  //     return <progress className="progress w-56"></progress>;
  //   }
  return (
    <div className="w-3/4 mx-auto m-10 p-5">
      <Link to={"/create-user"} className="btn btn-outline">
        Add User
      </Link>

      <div>
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
                      <Link to={`/view-user/${user._id}`} className="btn btn-outline">View</Link>
                      <Link to={`/update-user/${user._id}`} className="btn btn-outline btn-primary mx-5">
                        Edit
                      </Link>
                      <Link className="btn btn-outline btn-secondary">
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
