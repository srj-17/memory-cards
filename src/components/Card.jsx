function Card({ name, img, onClick }) {
    return (
        <div className="card" onClick={onClick}>
            <img src={img} alt={name} />
            <div className="name">{name}</div>
        </div>
    );
}

export default Card;
