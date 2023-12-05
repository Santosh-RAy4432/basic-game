import { useRef } from 'react';

export default function Player(){
    const playerName = useRef();
    // const [enteredPlayerName, setEnteredPlayerName]= useState(null);
    
    function handleClick(){
//  setEnteredPlayerName(playerName.current.value);
 playerName.current.value='';
    }
    return(
       
        <section id='player'>
            <h1> Final countdown</h1>
            <h2>welcome {playerName.current ?playerName.current.value :'unknown entity'}</h2>
            <p>
<input ref={playerName}
 type='text' 

/>
<button onClick={handleClick}>Name</button>
            </p>
        </section>
        
    );
}