import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Router from "./Router";

const GlobalStyle = createGlobalStyle`
${reset}
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');
*{
  box-sizing: border-box;
}
body{
  font-family: 'Source Sans Pro', sans-serif;
  color:black;
  font-weight: 300;
  line-height: 1.2;
  background: linear-gradient(135deg,#f341b4,#f6cff5);
}
a{
  text-decoration: none;
}
`;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  return (
    <>
      <Wrapper>
        <GlobalStyle />
        <Box />
      </Wrapper>
    </>
  );
}

export default App;
