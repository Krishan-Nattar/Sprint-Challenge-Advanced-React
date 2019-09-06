import React from 'react';
import useLocalStorage from "../hooks/useLocalStorage";




const SoccerData = (props) => {

    
    const {data} = props;
    const [value, setValue] = useLocalStorage('players', data);

    return ( <div>
        
        
        {value.map(person=>{
            return <p key={person.id}>{person.name}</p>
        })}
        
        
        
        </div> );
}
 
export default SoccerData;