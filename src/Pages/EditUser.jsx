import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../features/usersSlice";

const EditUser = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { users } = useSelector((state) => state.app);
  const singleUser = users.find((user) => user._id === id);

  const [updateUsers, setUpdateUsers] = useState(singleUser);
  const getUserData = (e) => {
    setUpdateUsers({ ...updateUsers, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("users...", updateUsers);
    dispatch(updateUser(updateUsers));
    navigate("/");
  };

  return (
    <div className="w-3/4 md:w-1/4 mx-auto p-5 m-10 border border-blue-400  rounded-md">
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            defaultValue={singleUser && singleUser?.name}
            placeholder="Name"
            className="input input-bordered"
            onBlur={getUserData}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            defaultValue={singleUser && singleUser?.email}
            placeholder="email"
            className="input input-bordered"
            onBlur={getUserData}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone</span>
          </label>
          <input
            type="tel"
            name="phone"
            defaultValue={singleUser && singleUser?.phone}
            placeholder="Phone"
            className="input input-bordered"
            onBlur={getUserData}
          />
        </div>
        <button type="submit" className="btn btn-outline w-full my-8">
          Create User
        </button>
      </form>
    </div>
  );
};

export default EditUser;
