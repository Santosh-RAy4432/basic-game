import { useRef, useState } from 'react';
import ResultModel from './ResultModel.jsx';
export default function Timechanger({title, targetTime}){
    const timer=useRef();
    const dialog = useRef();
    const[timeStarted,setTimeStart]=useState(false);
    const[timeExpired,setTimeExpired]=useState(false);
    function handleStart(){
        setTimeout(()=>{
            setTimeExpired(true);
            dialog.current.showModal();
        },
        targetTime*1000);
        setTimeStart(true);
    }
    function handleStop(){
        clearTimeout(timer.current);

    }
    return(
        <>
     <ResultModel ref={dialog} targetTime={targetTime} result='lost'/>

<section className="challenge">
<h2>{title}</h2>

<p className="challege-time">
    {targetTime}second{targetTime>1?'s':''}
</p>
<p>
    <button onClick={timeStarted? handleStop:handleStart}>
        {timeStarted?'stop':'start'} challenge
    </button >
</p>
<p className={timeStarted?'active':undefined}>
    {timeStarted?'time is running...':'timer is inactive'}</p>
</section>
</>
    );
}