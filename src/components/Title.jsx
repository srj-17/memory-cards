function Title() {
    return (
        <div className="title">
            <h1 className="name">Pokemon Memory Game</h1>
            {/*hover event only for animations*/}
            <div aria-label="description" className="desc">
                Click on any image to increase the score, but don't click it
                twice.
            </div>
        </div>
    );
}

export default Title;
