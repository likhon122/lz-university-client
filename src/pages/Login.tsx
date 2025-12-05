/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../hooks/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: "A-0001",
      password: "admin123",
    },
  });
  const dispatch = useAppDispatch();

  const [login, { isLoading, error }] = useLoginMutation();

  console.log(error);

  const onSubmit = async (data: Record<string, unknown>) => {
    const userData = await login(data).unwrap();
    const user = jwtDecode(userData.data?.accessToken);
    dispatch(
      setUser({
        user,
        token: userData.data?.accessToken,
      })
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {error && "data" in error && (
        <p style={{ color: "red" }}>{(error.data as any)?.message}</p>
      )}
      <div>
        <label htmlFor="username">ID: </label>
        <input type="text" id="username" {...register("id")} />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" {...register("password")} />
      </div>
      <Button htmlType="submit">{isLoading ? "Loading..." : "Login"}</Button>
    </form>
  );
};

export default Login;
