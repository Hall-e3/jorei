import { lazy } from "react";
import { Supensing } from "./components";
import { Route, Routes } from "react-router-dom";

const Home = Supensing(lazy(() => import("./pages/Home")));
const About = Supensing(lazy(() => import("./pages/About")));
const Careers = Supensing(lazy(() => import("./pages/Careers")));
const News = Supensing(lazy(() => import("./pages/News")));
const Products = Supensing(lazy(() => import("./pages/Products")));
function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/news" element={<News />} />
        <Route path="/products-services" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
