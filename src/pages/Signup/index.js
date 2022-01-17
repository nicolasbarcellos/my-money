import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";
import * as S from "./style";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const { error, isPending, signUp } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(error)
    signUp(email, password, displayName);
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <label htmlFor="email">
        <span>Email:</span>
        <input
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          id="email"
          type="email"
        />
      </label>
      <label htmlFor="password">
        <span>Password:</span>
        <input
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          id="password"
          type="password"
        />
      </label>
      <label htmlFor="name">
        <span>Display Name:</span>
        <input
          required
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
          id="name"
          type="text"
        />
      </label>

      {isPending ? (
        <button className="btn" disabled>
          loading...
        </button>
      ) : (
        <button className="btn">Signup</button>
      )}
      {error && <p>{error}</p>}
    </S.Form>
  );
}
