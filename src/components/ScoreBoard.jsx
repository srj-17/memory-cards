function ScoreBoard() {
    const score = 10;
    const highScore = 20;

    return (
        <div className="scoreboard">
            <div className="current-score">Score: {score}</div>
            <div className="high-score">High Score: {highScore}</div>
        </div>
    );
}

export default ScoreBoard;
