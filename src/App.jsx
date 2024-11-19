// import Output from "./components/todo-examples/Output";
// import Output from "./components/header-example/Output";
// import About from "./components/LandingPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import SearchBarWithTray from "./components/SearchBarWithTray";

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
                <Routes>
                    <Route
                        path="/"
                        element={<Header isLoggedIn={isLoggedIn} />}
                    />
                    <Route
                        path="/search"
                        element={<SearchBarWithTray></SearchBarWithTray>}
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
