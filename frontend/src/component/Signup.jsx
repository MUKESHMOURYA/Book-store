import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data)

  return (
    <>
      <div className=" flex h-screen items-center justify-center ">
        {/* Email */}

        <div
          id="hidediv"
          className=" modal-box border-[2px] shadow-md p-5 relative  rounded-md  "
        >
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            <Link
              to={"/"}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg pb-4">Signup</h3>
            <div>
              <span className="space-y-3">Name</span>
              <br />
              <input
                type="name"
                placeholder="Enter your FullName"
                className="w-80 px-2 py-1 border rounded-md outline-none"
                {...register("name", { required: true })}
              >{errors.name &&<span className='text-red-500 text-sm'><br/>This filed is required.</span>}</input>
            </div>
            <div>
              <span className="space-y-3">Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-2 py-1 border rounded-md outline-none"
                {...register("Email", { required: true })}
              />
              {errors.email &&<span className='text-red-500 text-sm'><br/>This filed is required.</span>}
            </div>

            {/* Password */}
            <div>
              <span className="space-y-3">Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your passwords"
                className="w-80 px-2 py-1 border rounded-md outline-none"
                {...register("Password", { required: true })}
                
              />
              {errors.password &&<span className='text-red-500 text-sm'><br/>This filed is required.</span>}

            </div>
            {/* Button */}
            <div className="flex justify-around mt-6">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200 ">
                Signup
              </button>
              <p>
                Not registered!
                <Link to={"/"}
                  className=" underline text-blue-500 cursor-pointer"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  {" "}
                  Login
                </Link>{" "}
                <Login />{" "}
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
