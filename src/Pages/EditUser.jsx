import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const EditUser = () => {
    const { id } = useParams();
  console.log(id);
  const { users } = useSelector((state) => state.app);
  const singleUser = users.find((user) => user._id === id);
  console.log(singleUser);
  const { _id, name, email, phone } = singleUser;
  const [updateUsers, setUpdateUsers] = useState(singleUser);
  const getUserData = (e) => {
    setUpdateUsers({ ...updateUsers, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("users...", updateUsers);
    // dispatch(createUser(users));
    // navigate("/");
  };
  console.log(updateUsers);
  return (
    <div className="w-1/2 mx-auto p-5 m-10">
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            defaultValue={singleUser && singleUser.name}
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
            defaultValue={singleUser && singleUser.email}
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
            defaultValue={singleUser && singleUser.phone}
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
