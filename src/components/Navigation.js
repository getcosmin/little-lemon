import { Link } from 'react-router-dom'

export default function Navigation() {
    return(
        <nav>  
            <div className="navigation-container wrapper">
                <div className="navigation-brand">
                    <div className="navigation-logo">Little Lemon</div>
                </div>
                <ul className="navigation-menu flex list-none">
                    <li><Link to="/" role='button'>Home</Link></li>
                    <li><Link to="/booking" role='button'>Reservation</Link></li>
                    <li><a href="#About" role='button'>About</a></li>
                    <li><a href="#Menu" role='button'>Menu</a></li>
                </ul>
                <a class="button-primary button-text" href='#login'>Login Account</a>
            </div>
        </nav>
    )
}
