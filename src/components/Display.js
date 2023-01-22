
export default function Display({content}) {
    return(
        <section className="display">
            <div className="display-container wrapper fill-available">
                <div className="display-body fill-available">
                    <h1>{content.title}</h1>
                    <p>{content.text}</p>
                </div>
                <div className="hero-focus">
                    <img className='focus-img' src='https://img.freepik.com/free-photo/friends-enjoying-lunch-restaurant_329181-11933.jpg'/>
                </div>
            </div>
        </section>
    )
}