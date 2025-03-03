function Card({ name, img }) {
    console.log("card");
    return (
        <div>
            <img src={img} alt={name} />
            <div className="name">{name}</div>
        </div>
    );
}

export default Card;
