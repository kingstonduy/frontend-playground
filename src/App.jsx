// import Output from "./components/todo-examples/Output";
// import Output from "./components/header-example/Output";
// import About from "./components/LandingPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import SearchBarWithTray from "./components/SearchBarWithTray";
import DropDownMenu from "./components/react-bootstrap/DropDownMenu";
import ProductGrid from "./components/ProductGrid";
import About from "./components/LandingPage";
import CheckoutPage from "./components/Checkout";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    return (
        <>
            <BrowserRouter>
                {/* <div className="w-full min-h-screen bg-white-950">
                </div>

                <div>
                    <Footer></Footer>
                </div> */}
                <Header />
                <Routes>
                    <Route
                        path="/search"
                        element={<SearchBarWithTray></SearchBarWithTray>}
                    />
                    <Route path="/About" element={<About />} />
                    <Route path="/menu" element={<DropDownMenu />} />
                    <Route path="/products" element={<ProductGrid />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
