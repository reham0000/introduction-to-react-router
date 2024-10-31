import { Link } from "react-router-dom";


const Header = () => {

    const design = {
        marginRight: '20px',
        fontSize: '30px',
    }

    return (
        <div>
            <h1>this is header</h1>
            <nav >
                <Link style={design} to='/'>Home</Link>
                <Link style={design} to='/users'>Users</Link>
                <Link style={design} to='/posts'>Posts</Link>
                <Link style={design} to='/about'>About</Link>
                <Link style={design} to='/contact'>Contact Us</Link>
            {/* <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a> */}
            </nav>
        </div>
    );
};

export default Header;