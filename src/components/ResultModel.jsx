import { forwardRef } from "react";

const ResultModel = forwardRef( function ResultModel({result,targetTime},ref){
    return(
        <dialog ref={ref} className="result-model">
            <h2> Your {result}</h2>
            <p>target time<strong>{targetTime}second</strong></p>
            <p>time stopped <strong>seconds left</strong></p>
            <form method="dialog">
                <button>close</button>
            </form>
        </dialog>
    );
})
export default ResultModel;