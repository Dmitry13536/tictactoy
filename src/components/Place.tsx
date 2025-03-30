import { useEffect, useState } from "react";
import cross from '../assets/cross.png'
import circle from '../assets/i.webp'
import { useTurn } from "../Context";

interface props{
    value?: string | null,
    onValueChange: (onChange:string | null | undefined, turn:string) => void,
    pos: number,
    onClick?: () => string,
}

function Place (props:props){
    const [img, setImg] = useState<string>('')
    const {turn, setTurn, flag, setFlag} = useTurn();

    const setPlace = () => {
            if (img == ''){
                setImg(turn === 'x' ? cross : circle); 
                props.onValueChange( props.value ,turn),
                setTurn(turn === 'x' ? 'o' : 'x');}
    }

    useEffect(()=> {
        if (flag){
            setImg('');
            setFlag(false)
        }
    }, [setFlag, flag])

    return(
        <div className="place" onClick={setPlace}>
            <img src={img} alt="" />
        </div>
    )
}

export default Place;