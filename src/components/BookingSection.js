import Booking from './sub-components/Booking'

export default function BookingSection() {
    return (
        <section>
        <div className="wrapper">
            <div className="headline">
                <h2>Reserve your table online!</h2>
            </div>
        </div>
        <div className="booking-module wrapper">
            <div>
                <h3>Our venue</h3>
                <img className='focus-img' src='https://img.freepik.com/premium-photo/cozy-restaurant-with-people-waiter_175935-230.jpg'/>   
            </div>  
            <div>
                <h3>Book here!</h3>
                <Booking />
            </div>
        </div>
    </section>
    )
}