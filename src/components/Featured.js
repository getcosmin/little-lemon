import CarouselCard from "./sub-components/Card";
import { Link } from "react-router-dom";

const cardData = [
    {
        title: 'Greek Salad',
        price: '$ 49.90',
        text: 'A traditional Greek salad consists of sliced cucumbers, tomatoes, green bell pepper and feta cheese.',
        img: 'https://img.freepik.com/free-photo/greek-salad-with-fresh-tomato-cucumber-red-onion-basil-feta-cheese-black-olives-italian-herbs_2829-4480.jpg'
    },
    {
        title: 'Pizza Diavola',
        price: '$ 99.90',
        text: 'A fiery Italian Pizza Diavola with spicy salami and chillies. The Diavola is also known under the name Diavolo.',
        img: 'https://img.freepik.com/free-photo/pizza-with-salami-tomatoes-olives-cheese-dough-with-whole-wheat-flour-italian-food_2829-6855.jpg'
    },
    {
        title: 'Dessert',
        price: '$ 24.90',
        text: 'An Italian dessert made of savoiardi ladyfingers soaked in coffee, arranged in layers and filled with a cream.',
        img: 'https://img.freepik.com/free-photo/tasty-homemade-tiramisu-cake_114579-85350.jpg'
    }
]

export default function Featured() {
    return( 
        <section className="featured">
            <div className="wrapper">
                <div className="featured-call-to-action">
                    <h2>Specials</h2>
                    <Link className='button-primary button-text' to="/booking" role='button'> 
                                Order Menu
                    </Link>
                </div>
                <div className="featured-cards">
                   {cardData.map(card => {
                        return < CarouselCard card = {{...card}} />
                   })}
                </div>
            </div>
        </section>
    )
}