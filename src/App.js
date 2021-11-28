import Navbar from "./components/Navbar";
import LeftContainer from "./components/LeftContainer";
import {AppStyled} from "./components/styled/App.styled";
import RightContainer from "./components/RightContainer";

function App() {
    return (
        <AppStyled>
                <header>
                    <Navbar/>
                </header>
                <div className={"mainContainer"} style={{display: "flex"}}>
                    <LeftContainer/>
                    <RightContainer/>
                </div>
        </AppStyled>
    )
}

export default App;
