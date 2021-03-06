import styled from "styled-components";

export const Container = styled.main`
    display: grid;
  grid-template-columns: 2fr 1fr;
  max-width: 960px;
  margin: 60px auto;

  .content {
    padding-right: 30px;

  }

  .sidebar {
    padding-left: 30px;


    form {
      padding: 20px;
  background: #1f9751;
  border-radius: 10px;
    }

    input, select {
      display: block;
  width: 100%;
  padding: 10px;
  margin-top: 8px;
  box-sizing: border-box;
  border: 0;
  border-radius: 4px;
  color: #555;
  font-size: 1em;


  label {
    margin: 0 auto 20px;
  display: block;
  color: #fff;
  }
}

button {
  color: #fff;
  border: 2px solid #fff;
  padding: 6px 12px;
  background-color: transparent;
  font-size: 1em;
  border-radius: 4px;
  cursor: pointer;
  display: block;
  width: 100%;
}

  h3 {
    color: #1f9751;
  margin-bottom: 20px;
  }

  aside {
    margin-top: 40px;
  color: #555;
  li {
    margin: 10px
  }
  }

    }

    
  }


`;
