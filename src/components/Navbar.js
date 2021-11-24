import Search from "./Search"
import logo from '../logo.png'
import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <div className="navbarBrand">Chords Manager</div>
                <ul className="navbarLinks">
                    <li>
                        <Link className="link" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="link" to="/about">About</Link>
                    </li>
                </ul>
            <Search/>
            <img src={logo} className="accountImage" alt="ico" width={'50px'}/>
        </nav>
    )
}