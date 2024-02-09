import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./custom.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import CustomNavbar from "./Components/CustomNavbar";
import CustomFooter from "./Components/CustomFooter";
import HomePage from "./Components/HomePage";
import Details from "./Components/Details";
import ErrorePage from "./Components/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <div className="h-100 d-flex flex-column">
        <CustomNavbar />
        <main className="flex-grow-1">
          <Routes>
            <Route element={<HomePage />} path="/" />
            <Route element={<Details />} path="/details/:city" />
            <Route element={<ErrorePage />} path="*" />
          </Routes>
        </main>
        <CustomFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
