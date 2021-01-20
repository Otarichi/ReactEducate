import { Link } from "react-router-dom";

const Navbar = () => {
    return <div>
        <ul>
            <li><Link to="/bbc">BBC</Link></li>
            <li><Link to="/cnn">CNN</Link></li>
            <li><Link to="/send_news">Send NEWS</Link></li>
            <li><Link to="/about_author">About Author</Link></li>
        </ul>
    </div>
}

export default Navbar;