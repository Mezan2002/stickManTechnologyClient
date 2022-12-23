import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const LogIn = () => {
  const { loginWithEmailAndPassword } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const handleLogIn = (event) => {
    setErrorMessage("");
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loginWithEmailAndPassword(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/memberList");
      })
      .catch((error) => setErrorMessage(error.message));
  };

  return (
    <div>
      <div className="min-h-[95vh] mt-8 flex justify-center items-center">
        <div className="border border-gray-500 w-11/12 lg:w-4/12 mx-auto rounded-xl pt-10 pb-20">
          <h2 className="text-3xl font-semibold mb-5 pb-5 text-center">
            Login
          </h2>
          <p className="text-red-500 mb-5 text-center">
            {errorMessage.slice(10, 300)}
          </p>
          <form onSubmit={handleLogIn} className="w-9/12 mx-auto">
            <div className="inputGroup">
              <input
                className="border-b-2 inputForm w-full py-3 pl-2 focus:outline-none text-xl"
                type="email"
                name="email"
                placeholder="Username or Email"
                required
              />
            </div>
            <div className="inputGroup ">
              <input
                className="border-b-2 inputForm w-full py-3 pl-2 focus:outline-none text-xl mt-10"
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>
            <div className="flex justify-between  mt-10">
              <div>
                <input type="checkbox" name="" id="rememberMe" />
                <label htmlFor="rememberMe" className="ml-2">
                  Remember Me
                </label>
              </div>
              <div>
                <button className="underline">Forgot Password</button>
              </div>
            </div>
            <input
              className="btn btn-primary w-full mt-10 "
              type="submit"
              value="Log In"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
