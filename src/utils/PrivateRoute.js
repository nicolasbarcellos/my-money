import { Navigate } from "react-router";

export function PrivateRoute({ userIsLogged, children, redirectTo }) {
  return userIsLogged ? children : <Navigate to={redirectTo} />;
}
