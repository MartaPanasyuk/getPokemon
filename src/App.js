import "./App.css";
import DetailsCard from "./pages/DetailsCard";
import HomePage from "./pages/HomePage";
import { Routes, Route, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Link to="/">Homepage</Link>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:pokeName" element={<DetailsCard />} />
      </Routes>
    </div>
  );
}

export default App;
