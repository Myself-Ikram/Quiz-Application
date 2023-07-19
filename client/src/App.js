import { BrowserRouter, Route, Routes } from "react-router-dom";
import Result from "./pages/Result";
import Main from "./pages/Main";
import Quiz from "./pages/Quiz";
import Heading from "./components/Heading";
import { Container } from "react-bootstrap";
import "./styles/App.css";
function App() {
  return (
    <BrowserRouter>
      <Container className="text-light" style={{ width: "560px" }}>
        <Heading />
        <Routes>
          <Route element={<Main />} path="/"></Route>
          <Route element={<Quiz />} path="/quiz"></Route>
          <Route element={<Result />} path="/result"></Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
