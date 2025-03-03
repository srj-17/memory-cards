function Title() {
    return (
        <div className="title">
            <div className="name">Pokemon Memory Game</div>
            {/*hover event only for animations*/}
            <div className="desc">
                Click on any image to increase the score, but don't click it
                twice.
            </div>
        </div>
    );
}

export default Title;
