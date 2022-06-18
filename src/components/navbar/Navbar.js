//Import CSS Module
//Disimpan di variable styles
import { Link } from "react-router-dom";
import StyledNavbar from "./Navbar.styled";

function Navbar(){
    return(
        <StyledNavbar>
            <nav>
                <div>
                    <h1>Movie App</h1>
                </div>
                <div>
                    <ul>
                        <li>
                            <Link className="link" to="/">Home</Link>
                        </li>
                        <li>
                            <Link className="link" to="/movie/create">Add Movie</Link>
                        </li>
                        <li>
                            <Link className="link" to="/movie/popular">Popular</Link>
                        </li>
                        <li>
                            <Link className="link" to="/movie/now">Now Playing</Link>
                        </li>
                        <li>
                            <Link className="link" to="/movie/top">Top Rated</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </StyledNavbar>
    )
}

export default Navbar;