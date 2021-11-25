import {Route, Routes} from "react-router-dom";
import About from "./About";
import Home from "./Home";
import {RightContainerStyled} from "./styled/RightContainerStyled";

export default function RightContainer() {
    return (
        <RightContainerStyled>
            <Routes>
                <Route path="/about" element={<About/>}/>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </RightContainerStyled>
    )
}