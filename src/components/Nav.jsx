import { Link } from "react-router-dom";

export default function Nav() {

    return (
        <div className="nav">

            <Link to="/">
                <div>Home</div>
            </Link>

            <Link to="/">
                <div>Stocks</div>
            </Link>

            <Link to="About">
                <div>About</div>
            </Link>

        </div>
    )
}