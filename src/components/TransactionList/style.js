import styled from "styled-components";

export const Container = styled.ul`
  li {
    margin: 30px auto;
    border: 1px solid #f2f2f2;
    box-shadow: 3px 3px 5px rgba(50, 50, 50, 0.1);
    padding: 20px;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
    border-left: 4px solid #1f9751;
  }

  .name {
    color: #777;
    font-size: 1.4em;
  }

  .amount {
    margin-left: auto;
    margin-right: 40px;
    color: #777;
    font-weight: bold;
    font-size: 1.6em;
  }

  button {
    position: absolute;
    top: 0;
    right: 0;
    background: #ddd;
    color: #777;
    border: none;
    padding: 12px 8px;
    text-align: center;
    line-height: 0;
    font-size: 0.9em;
    cursor: pointer;
  }
`;
