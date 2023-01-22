import { useEffect } from "react"
import BookingSection from "../components/BookingSection"
import HeroLarge from '../components/HeroLarge'

export default function BookingPage() {

    return(
        <>
            <HeroLarge content = {{ 
                title: 'Reservation',
                text: 'Book your table now at Litle Lemon restaurant.',     
            }}/>

            <BookingSection/>
            
        
        </>
    )
}