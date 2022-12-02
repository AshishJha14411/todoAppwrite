import React, { useState } from "react";
import { account } from "../appwrite/appwriteConfig";
import { useNavigate } from "react-router-dom";
import { v4 as id } from "uuid";
const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  }); /* 
    console.log(user) */

  //Registering
  const registerUser = async (e) => {
    e.preventDefault();
    const promise = account.create(id(), user.email, user.name, user.password);
    console.log(user);
    promise.then(
      function (res) {
        console.log(res);
        navigate("/todolist");
      },
      function (err) {
        console.log(err, "hi hi");
      }
    );
  };
  return (
    <div className="bg-[#03203C] w-2/5 flex flex-col mx-auto mt-[6rem] rounded-[4%] justify-center">
      <p className="text-[3rem] text-center font-semibold text-white my-5">
        Registration
      </p>
      <form className=" flex flex-col justify-center">
        <input
          className="w-3/5 mx-auto my-4 p-3"
          placeholder="Name"
          onChange={(e) => {
            setUser({
              ...user,
              name: e.target.value,
            });
          }}
        />
        <input
          className="w-3/5 mx-auto my-4 p-3"
          placeholder="Email Address"
          onChange={(e) => {
            setUser({
              ...user,
              email: e.target.value,
            });
          }}
        />
        <input
          className="w-3/5 mx-auto my-4 p-3"
          placeholder="Password"
          onChange={(e) => {
            setUser({
              ...user,
              password: e.target.value,
            });
          }}
          type="password"
        />
      </form>
      <button
        className="w-2/5 mx-auto mb-6 p-4 text-white fond-extrabold bg-[#205e98] rounded-full text-xl hover:bg-[#517ded] hover:text-black ease-in duration-200"
        onClick={registerUser}
      >
        Register
      </button>
    </div>
  );
};

export default Register;
