import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const PrivateRoute = ({ elemte: Element, ...rest }) => {
  const { isAuthenticated } = useAuth;
  return isAuthenticated ? (
    <Element {...rest} />
  ) : (
    <Navigate to="/login"></Navigate>
  );
};

export default PrivateRoute;
