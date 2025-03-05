function Card({ name, img, onClick, id }) {
    return (
        <button id={id} className="card" onClick={onClick}>
            <img src={img} alt={name} />
            <div className="name">{name}</div>
        </button>
    );
}

export default Card;
