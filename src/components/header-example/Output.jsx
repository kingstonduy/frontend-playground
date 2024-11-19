import Header from "./Header";
import { BrowserRouter as Router } from "react-router-dom";

function Output() {
    return (
        <>
            <Router>
                <div className="w-full min-h-screen bg-gray-950">
                    <Header />
                </div>
            </Router>
        </>
    );
}

export default Output;
