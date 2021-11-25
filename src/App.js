import Navbar from "./components/Navbar";
import {BrowserRouter as Router} from "react-router-dom";
import LeftContainer from "./components/LeftContainer";
import {AppStyled} from "./components/styled/App.styled";
import RightContainer from "./components/RightContainer";

function App() {
    return (
        <AppStyled>
            <Router>
                <Navbar/>
                <div className={"mainContainer"} style={{display: "flex"}}>
                    <LeftContainer/>
                    <RightContainer/>
                </div>
            </Router>
        </AppStyled>
    )
}

export default App;
