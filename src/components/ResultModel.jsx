

export default function ResultModel({result,targetTime}){
    return(
        <dialog>
            <h2> Your {result}</h2>
            <p>target time<strong>{targetTime}second</strong></p>
            <p>time stopped <strong>seconds left</strong></p>
            <form method="dialog">
                <button>close</button>
            </form>
        </dialog>
    );
}