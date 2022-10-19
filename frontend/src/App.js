import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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

//Context
import { useAuthContext } from "./components/customHooks/useAuthContext";
function App() {
  const { user } = useAuthContext();
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop>
          <Navigation />
          <div className="pages p-2">
            <Routes>
              <Route
                path="/"
                element={user ? <Home /> : <Navigate to="/Login" />}
                exact
              />
              <Route
                path="/Login"
                element={user ? <Navigate to="/" /> : <Login />}
              />
              <Route
                path="/SignUp"
                element={user ? <Navigate to="/" /> : <SignUp />}
              />
              <Route
                path="/MyItems"
                element={user ? <MyItems /> : <Navigate to="/" />}
              />
              <Route
                path="/Items/:ItemType"
                element={user ? <ItemsPage /> : <Navigate to="/" />}
              />
            </Routes>
          </div>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
