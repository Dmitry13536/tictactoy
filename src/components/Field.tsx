import React from "react";
import Place from "./Place";


interface Props{}

const Field:React.FC<Props> = () => {

    // const handleValue = (onChange:string | null| undefined,newValue:string) => {
    //     onChange = newValue; 
    // }

    // function caclulateWinner():void{
    //     const lines:number[][] = [
    //         [0, 1, 2],
    //         [3, 4, 5],
    //         [6, 7, 8],
    //         [0, 3, 6],
    //         [1, 4, 7],
    //         [2, 5, 8],
    //         [0, 4, 8],
    //         [2, 4, 6],
    //       ];

    //       for(let i = 0; i<lines.length; i++){
    //         const [a,b,c]:number[] = lines[i];
    //         if (a === b && b===c && a!=null){
    //             return a
    //         }
    //       }
    // }


    return(
        <div className="field">
            <Place/>
            <Place/>
            <Place/>
            <Place/>
            <Place/>
            <Place/>
            <Place/>
            <Place/>
            <Place/>
        </div>
    )
}

export default Field;