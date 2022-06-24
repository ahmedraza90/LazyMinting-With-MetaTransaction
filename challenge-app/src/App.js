import Lazyminting from "./components/main";
import { Routes, Route,BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import BuNFT from "./components/BuNFT";
import ListNFTForm from "./components/ListNFTForm";


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/lazy" element={<Home />}/>
        <Route path="/" element={<Lazyminting />}/>
        <Route exact path="buy" element={<BuNFT />}/>
        <Route exact path="listform" element={<ListNFTForm />}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;