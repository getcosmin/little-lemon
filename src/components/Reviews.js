import CardReview from "./sub-components/CardReview"


const reviews = [
    {
        name: 'John Doe',
        review: 'A great place to eat pizza with your family.',
        rating: 9
    },
    {
        name: 'Karen Smith',
        review: 'The salad was mediocre at best.',
        rating: 6
    },
    {
        name: 'Angela Maddison',
        review: 'The desserts here are amazing! You should go just for them.',
        rating: 10
    }
]

export default function review() {



    return( 
        <section className="review">
            <div className="wrapper">
                <div className="review-header">
                    <h2 className="review-title">Testimonials</h2>
                    <p className="review-subtitle">What our clients say about us</p>
                </div>
                <div className="review-cards-frame">
                    { reviews.map(review => {
                        return <CardReview card = {{...review}}/>
                    })

                    }
                </div>
            </div>
        </section>
    )
}