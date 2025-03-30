import cross from '../assets/cross.png'
import circle from '../assets/i.webp'
import { useTurn } from "../Context";

const Sign = () => {

    const {turn, setFlag} = useTurn();

    const Restart = () => {
        setFlag(true);
    }

    return(
        <div className="sign">
        <p className="sign__text">Turn:</p>
        <div className="sign__this">
            <img src={turn === 'x' ? cross : circle} alt="" />
        </div>
        <button className="restart" onClick={Restart}>restart</button>
        </div>
    )
}

export default Sign;