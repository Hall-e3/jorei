import { lazy } from "react";
import { Supensing } from "./components";
import { Route, Routes } from "react-router-dom";

const Home = Supensing(lazy(() => import("./pages/Home")));

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
