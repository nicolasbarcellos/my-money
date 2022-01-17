import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useLogout } from "../../hooks/useLogout";
import * as S from "./style";

export function Navbar() {
  const { logout } = useLogout();
  const { user } = useAuth();

  return (
    <S.Nav>
      <ul>
        <li className="title">
          <Link to="/">myMoney</Link>
        </li>

        {!user && (
          <>
            <li>
              <Link to="login">Login</Link>
            </li>
            <li>
              <Link to="signup">Signup</Link>
            </li>
          </>
        )}

        {user && (
          <>
            <li>Hello, {user.displayName}</li>

            <li>
              <button className="btn" onClick={logout}>
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </S.Nav>
  );
}
