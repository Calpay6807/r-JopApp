import "./App.css";
import { Routes, Route } from "react-router-dom";
import FormArea from "./pages/form";
import FormValid from "./pages/form-valid";
import FormSub from "./pages/form-sub";
import Header from "./components/header";
import MainPage from "./components/main-page";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="form" element={<FormArea />} />
        <Route path="form-valid" element={<FormValid />} />
        <Route path="form-sub" element={<FormSub />} />
      </Routes>
    </>
  );
}

export default App;
