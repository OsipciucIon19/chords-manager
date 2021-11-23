import Search from "./Search"
import logo from '../logo.png'
import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <div>Logo</div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            <Search/>
            <img src={logo} alt="ico" width={'50px'}/>
        </nav>
    )
}