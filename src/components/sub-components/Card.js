export default function CarouselCard({card}) {
    return(
        <div className="card">
            <div className="card-image"></div>
            <div className="card-body">
                <div className="card-header">
                    <h3>{card.title}</h3>
                    <span className="card-price">{card.price}</span>
                </div>
                <p>{card.text}</p>
            </div>
        </div>
    )
}