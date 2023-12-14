import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModel = forwardRef( function ResultModel({result,targetTime , remainTime, onReset},ref){
   const dialog= useRef();
   const userLost = remainTime <=0;
   const formattedRemainTime =(remainTime/1000).toFixed(2);
   const score = Math.round((1-remainTime/(targetTime * 1000))*100);

    useImperativeHandle(ref,()=>{
        return{
            open() {
                dialog.current.showModal();
            }
        };

    });
    return(
        <dialog ref={dialog} className="result-model">
            
           {userLost && <h2> Your Loose</h2>}
           {!userLost && <h2>Your Score:{score}</h2>}
            <p>target time<strong>{targetTime} second</strong></p>
            <p>
                time stopped {''}<strong>{formattedRemainTime} seconds left.</strong></p>
            <form method="dialog" onSubmit={onReset}>
                <button>close</button>
            </form>
        </dialog>
    );
})
export default ResultModel;