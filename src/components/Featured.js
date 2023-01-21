import CarouselCard from "./sub-components/Card";

const cardData = [
    {
        title: 'Greek Salad',
        price: '$ 49.90',
        text: 'A traditional Greek salad consists of sliced cucumbers, tomatoes, green bell pepper and feta cheese.'
    },
    {
        title: 'Pizza Diavola',
        price: '$ 99.90',
        text: 'A traditional Greek salad consists of sliced cucumbers, tomatoes, green bell pepper and feta cheese.'
    },
    {
        title: 'Dessert',
        price: '$ 24.90',
        text: 'A traditional Greek salad consists of sliced cucumbers, tomatoes, green bell pepper and feta cheese.'
    }
]

export default function Featured() {
    return( 
        <section className="featured">
            <div className="wrapper">
                <div className="featured-call-to-action">
                    <h2>Specials</h2>
                    <button className="button-primary">Order Menu</button>
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