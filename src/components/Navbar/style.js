import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  background: #effaf0;
  padding: 20px 10px;
  box-sizing: border-box;

  ul {
    display: flex;
    margin: 0 auto;
    max-width: 960px;
    align-items: center;
  }

  .title {
    margin-right: auto;
  font-weight: bold;
  letter-spacing: 1px;
  font-size: 1.2em;
  }

  li, a {
    color: #333;
    text-decoration: none;
    margin-left: 16px;
  }
`;
