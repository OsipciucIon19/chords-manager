import {Route, Routes} from "react-router-dom";
import Library from "./Library";
import About from "./About";
import Home from "./Home";
import {RightContainerStyled} from "./styled/RightContainerStyled";

export default function RightContainer() {
    return (
        <RightContainerStyled>
            <Routes>
                <Route path="/library" element={<Library/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/" element={<Home/>} exact/>
            </Routes>
        </RightContainerStyled>
    )
}