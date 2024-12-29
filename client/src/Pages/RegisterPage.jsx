import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
//con la biblioteca useForm se controlan los datos de los formularios evitando la creacioN
//de estados (molestos estados =D)

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { singup, isAuthenticated, errors: RegisterErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated, navigate]);

  const onSubmit = handleSubmit(async (values) => {
    singup(values);
  });

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md p-10 rounded-md">
        {RegisterErrors.map((error, i) => (
          <div className="bg-red-500 p-2 text-white" key={i}>
            {error}
          </div>
        ))}
        <form onSubmit={onSubmit}>
        <h1 className="text-2xl font-bold m-4">Register</h1>
          <input
            type="text"
            {...register("username", { required: true })}
            className="w-full bg-zinc 700 text-black px-4 py-2 rounded-md my-2"
            placeholder="Username"
          />

          {errors.username && (
            <p className="text-red-500">Username is required</p>
          )}

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

          <button type="submit"
          className="bg-sky-500 text-white px-4 py-2 rounded-md">Register</button>
        </form>
        <p className="flex gap-x-2 justify-between">
          Already have an account?
          <Link to="/Login" className="text-sky-500">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
