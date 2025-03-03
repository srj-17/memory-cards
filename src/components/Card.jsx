function Card({ name, img, onClick, id }) {
    return (
        <div id={id} className="card" onClick={onClick}>
            <img src={img} alt={name} />
            <div className="name">{name}</div>
        </div>
    );
}

export default Card;
