import "./card.css"

interface CardProps {
    price: number,
    name: string,
    image: string,
}

export function Card({ price, image, name }: CardProps) {
    return (
        <div className="card">
            <img src={image}/>
            <h2>{name}</h2>
            <p><b>{price}</b></p>
        </div>
    );
}