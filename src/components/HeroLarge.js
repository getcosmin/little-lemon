import { Link } from 'react-router-dom'

export default function HeroLarge({content}) {
    return(
        <section className="hero">
            <div className="hero-container wrapper fill-available">
                <div className="hero-body fill-available">
                    <h1>{content.title}</h1>
                    <p>{content.text}</p>
                    { content.button ? 
                            <Link className='button-primary button-text' to="/booking" role='button'> 
                                {content.button}
                             </Link>
                    : null }
                </div>
                <div className="hero-focus">
                    
                </div>
            </div>
        </section>
    )
}