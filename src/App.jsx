import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
function App() {
  return (
    <div className="background">
      <Header />
      <Routes>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
