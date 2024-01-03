import { lazy } from "react";
import { Supensing } from "./components";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";

const Home = Supensing(lazy(() => import("./pages/Home")));

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
