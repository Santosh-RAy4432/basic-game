import { useRef, useState } from 'react';
export default function Timechanger({title, targetTime}){
    const timer=useRef();
    const[timeStarted,setTimeStart]=useState(false);
    const[timeExpired,setTimeExpired]=useState(false);
    function handleStart(){
        setTimeout(()=>{
            setTimeExpired(true);
        },
        targetTime*1000);
        setTimeStart(true);
    }
    function handleStop(){
        clearTimeout(timer.current);

    }
    return(
<section className="challenge">
<h2>{title}</h2>
{timeExpired &&<p>YOu loose</p>}
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
    );
}