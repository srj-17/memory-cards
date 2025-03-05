function ScoreBoard({ score, highScore }) {
    return (
        <div className="scoreboard">
            <div id="score" className="current-score">
                Score: {score}
            </div>
            <div aria-labelledby="score" className="high-score">
                High Score: {highScore}
            </div>
        </div>
    );
}

export default ScoreBoard;
