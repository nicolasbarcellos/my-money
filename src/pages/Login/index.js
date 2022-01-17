import { useState } from "react";

import { useLogin } from "../../hooks/useLogin";
import * as S from "./style";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isPending } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label htmlFor="email">
        <span>Email:</span>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          id="email"
          type="email"
        />
      </label>
      <label htmlFor="password">
        <span>Password:</span>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          id="password"
          type="password"
        />
      </label>
      {!isPending ? (
        <button className="btn">Login</button>
      ) : (
        <button className="btn" disabled>
          loading...
        </button>
      )}
      {error && <p>{error}</p>}
    </S.Form>
  );
}
