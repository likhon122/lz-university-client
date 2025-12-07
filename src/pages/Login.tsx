import { Button, Row } from "antd";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../hooks/hooks";
import { setUser, type TUser } from "../redux/features/auth/authSlice";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router";
import LZForm from "../components/form/LZForm";
import LZInput from "../components/form/LZInput";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [login, { isLoading, error }] = useLoginMutation();

  const onSubmit = async (data: Record<string, unknown>) => {
    const userData = await login(data).unwrap();
    const user = jwtDecode(userData.data?.accessToken) as TUser;
    dispatch(
      setUser({
        user,
        token: userData.data?.accessToken,
      })
    );

    if (userData.data?.accessToken) {
      navigate(`/${user.role}/dashboard`);
    }
  };

  const defaultValues = {
    id: "A-0001",
    password: "admin123",
  };

  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      {error && typeof error === "object" && "data" in error && (
        <p style={{ color: "red" }}>
          {(error as { data?: { message?: string } }).data?.message}
        </p>
      )}
      <LZForm onsubmit={onSubmit} defaultValues={defaultValues}>
        <LZInput type="text" name="id" label="ID" />
        <LZInput type="password" name="password" label="Password" />
        <Button htmlType="submit">{isLoading ? "Loading..." : "Login"}</Button>
      </LZForm>
    </Row>
  );
};

export default Login;
