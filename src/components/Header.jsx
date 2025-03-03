import ScoreBoard from "./ScoreBoard.jsx";
import Title from "./Title.jsx";

function Header() {
    return (
        <div className="header">
            <Title />
            <ScoreBoard />
        </div>
    );
}

export default Header;
