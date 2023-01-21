import { useEffect } from "react"

export default function BookingPage() {

    return(
        <section>
            <div className="wrapper">
                <h1>Booking Page</h1>

                <form className="booking-form">
                    <div>
                        <label for="res-date">Choose date</label>
                        <input type="date" id="res-date"/>
                    </div>
                    <div>
                        <label for="res-time">Choose time</label>
                        <select id="res-time">
                            <option>17:00</option>
                            <option>18:00</option>
                            <option>19:00</option>
                            <option>20:00</option>
                            <option>21:00</option>
                            <option>22:00</option>
                        </select>
                    </div>
                    <div>
                        <label for="guests">Number of guests</label>
                        <input type="number" placeholder="1" min="1" max="10" id="guests"/>
                    </div>
                    <button type="Submit">Submit</button>
                </form>
            </div>
        </section>
    )
}