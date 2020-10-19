import React from 'react';

function Dinner(props){
    return(
        <div>
            <h1>today, we are serving {props.dishname}</h1>
            <h1>today, we are serving {props.sweetname}</h1>
            <br/>
        </div>
    ) 
}

export default Dinner;