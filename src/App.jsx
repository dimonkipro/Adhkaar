import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
