import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <h1>this is header</h1>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/users'>Users</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact Us</Link>
            {/* <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a> */}
            </nav>
        </div>
    );
};

export default Header;