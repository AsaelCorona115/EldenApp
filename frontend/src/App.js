import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import ItemsPage from "./pages/itemsPage";
import MyItems from "./pages/MyItems";

// Components
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop>
          <Navigation />
          <div className="pages p-2">
            <Routes>
              <Route path="/" element={<Home />} exact />
              <Route path="/Login" element={<Login />} />
              <Route path="/SignUp" element={<SignUp />} />
              <Route path="/MyItems" element={<MyItems />} />
              <Route path="/Items/:ItemType" element={<ItemsPage />} />
            </Routes>
          </div>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
