import { useEffect } from "react"
import HeroLarge from '../components/HeroLarge'
import Booking from "../components/Booking"

export default function BookingPage() {

    return(
        <>
            <HeroLarge content = {{ 
                title: 'Reservation',
                text: 'Book your table now at Litle Lemon restaurant.',     
            }}/>

            <section>
                <div className="wrapper">
                    <div className="headline">
                        <h2>How to reach us</h2>
                    </div>
                </div>
                <div className="booking-module wrapper">
                    <div>
                        <h3>Our location</h3>
                    </div>  
                    <div>
                        <h3>Book your table from here!</h3>
                        <Booking />
                    </div>
                </div>
            </section>
            
        
        </>
    )
}