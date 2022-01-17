import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
  font-family: Poppins, sans-serif;
  margin: 0;
  font-size: 1.1em;
}
ul, li, p, h1, h2, h3, h4 {
  margin: 0;
  padding: 0;
}
ul {
  list-style-type: none;
}
.btn {
  background: none;
  border: 2px solid #1f9751;
  padding: 6px 12px;
  border-radius: 4px;
  color: #1f9751;
  font-weight: bold;
  cursor: pointer;
  font-size: 1em;
}
.btn:hover {
  background: #1f9751;
  color: #fff;
}
`;
