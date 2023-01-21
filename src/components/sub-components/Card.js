export default function CarouselCard({card}) {
    return(
        <div className="card">
            {card.img ? 
                <img className="card-image" src={card.img}/>
                : 
                null
            }
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