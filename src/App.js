import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home"
import About from "./components/About"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LeftContainer from "./components/LeftContainer";

function App() {
    return (
        <Router>
            <Navbar/>
            <div className={"mainContainer"} style={{display: "flex"}}>
                <div className="leftContainer" style={{width: 300}}>
                    <LeftContainer />
                </div>
                <Routes>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </div>
        </Router>
    )
}

export default App;
