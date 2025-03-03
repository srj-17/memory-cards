import ScoreBoard from "./ScoreBoard.jsx";
import Title from "./Title.jsx";

function Header(props) {
    return (
        <header>
            <Title />
            <ScoreBoard {...props} />
        </header>
    );
}

export default Header;
