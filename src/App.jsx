import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import MemoryCards from "./components/MemoryCards";

function App() {
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);

    function updateScore(newScore) {
        setScore(newScore);
        if (newScore > highScore) setHighScore(newScore);
    }

    return (
        <div>
            <Header score={score} highScore={highScore} />
            <MemoryCards score={score} updateScore={updateScore} />
        </div>
    );
}

export default App;
