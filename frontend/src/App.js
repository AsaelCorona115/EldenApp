import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
// Pages
import Home from "./pages/Home";
import ItemsPage from "./pages/itemsPage";
import SingleItem from "./pages/SingleItem";
// Components
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop>
          <Navigation />
          <div className="pages">
            <Routes>
              <Route path="/" element={<Home />} exact />
              <Route path="/Items/:ItemType" element={<ItemsPage />} />
              <Route path="Item/:type/:id" element={<SingleItem />} />
            </Routes>
          </div>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
