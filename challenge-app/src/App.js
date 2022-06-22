import Lazyminting from "./components/main";
import { Routes, Route, Link, Outlet, NavLink } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Lazyminting />}/>
      </Routes>
    </>
  );
}

export default App;