import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { account } from "../appwrite/appwriteConfig";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      await account.createEmailSession(user.email, user.password);
      navigate("/todolist");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-[#03203C] w-2/5 flex flex-col mx-auto mt-[10rem] rounded-[4%] justify-center">
      <h1 className="text-[3rem] text-center font-bold text-white my-5">
        Login
      </h1>
      <form className=" flex flex-col justify-center">
        <input
          className="w-3/5 mx-auto my-4 p-3"
          placeholder="Email Address"
          name="email"
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
          name="password"
          onChange={(e) => {
            setUser({
              ...user,
              password: e.target.value,
            });
          }}
        />
      </form>

      <button
        className="w-2/5 mx-auto my-6 p-4 text-white fond-extrabold bg-[#207398] rounded-full text-xl hover:bg-[#51E1ED] hover:text-black ease-in duration-200"
        onClick={loginUser}
      >
        Login
      </button>
      <button
        className="w-2/5 mx-auto mb-6 p-4 text-white fond-extrabold bg-[#205e98] rounded-full text-xl hover:bg-[#517ded] hover:text-black ease-in duration-200"
        onClick={() => navigate("/register")}
      >
        Register
      </button>
    </div>
  );
};

export default Login;
