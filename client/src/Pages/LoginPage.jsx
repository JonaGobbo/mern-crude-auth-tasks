import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signin, errors: siginErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated, navigate]);

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md ">
        {siginErrors.map((error, i) => (
          <div className="bg-red-500 p-2 m-2 text-white text-center" key={i}>
            {error}
          </div>
        ))}

        <form onSubmit={onSubmit}>
          <h1 className="text-2xl font-bold m-4">Login</h1>
          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full bg-zinc 700 text-black px-4 py-2 rounded-md my-2"
            placeholder="Email"
          />
          {errors.email && <p className="text-red-500">Email is required</p>}

          <input
            type="password"
            {...register("password", { required: true })}
            className="w-full bg-zinc 700 text-black px-4 py-2 rounded-md my-2"
            placeholder="Password"
          />

          {errors.password && (
            <p className="text-red-500">Password is required</p>
          )}

          <button  className="bg-sky-500 text-white px-4 py-2 rounded-md" type="submit">
            Login
          </button>
        </form>
        <p className="flex gap-x-2 justify-between">
          Dont have an account?
          <Link to="/register" className="text-sky-500">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
