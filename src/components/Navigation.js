import { Link } from 'react-router-dom'

export default function Navigation() {
    return(
        <nav>  
            <div className="navigation-container wrapper">
                <div className="navigation-brand">
                    <div className="navigation-logo">Little Lemon</div>
                </div>
                <ul className="gap01 flex list-none">
                    <Link to="/" role='button'>Home</Link>
                    <Link to="/booking" role='button'>BookingPage</Link> 
                </ul>
            </div>
        </nav>
    )
}
