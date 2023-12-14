import { useRef, useState } from 'react';
import ResultModel from './ResultModel.jsx';
export default function Timechanger({title, targetTime}){
    const timer=useRef();
    const dialog = useRef();
    const [time, setTime] = useState(targetTime*1000);
    const timeActive=time > 0 && time < targetTime*1000;
    // const[timeStarted,setTimeStart]=useState(false);
    // const[timeExpired,setTimeExpired]=useState(false);

    if(time<=0){
        clearInterval(timer.current);
        setTime(targetTime*1000);
        dialog.current.open();
    }
function handleReset(){
    setTime(targetTime * 1000);
}

    function handleStart(){
        timer.current=setInterval(()=>{
            setTime(prevTime=>prevTime-10);

        },10);
        }
       
    
    function handleStop(){
        clearInterval(timer.current);
        
        dialog.current.open();

    }
    return(
        <>
     <ResultModel ref={dialog} 
     targetTime={targetTime} 
      remainTime={time}
      onReset={handleReset}
      />

<section className="challenge">
<h2>{title}</h2>

<p className="challege-time">
    {targetTime} second {targetTime> 1?'s':''}
</p>
<p>
    <button onClick={timeActive? handleStop:handleStart}>
        {timeActive?'stop':'start'} challenge
    </button >
</p>
<p className={timeActive?'active':undefined}>
    {timeActive?'time is running...':'timer is inactive'}</p>
</section>
</>
    );
    }