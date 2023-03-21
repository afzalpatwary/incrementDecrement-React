import React, { useState } from "react";

const IncrementDecrement = () => {

   
        const [count, setCount] = useState(0); 

        const increment = () =>{
            setCount((prevCount) => prevCount +1)
        }
        
        const decrement = () =>{
            setCount((prevCount) => prevCount > 0 ? prevCount -1 : prevCount = 0)
        }


        return (
            <div>
                <div className="IncrementDecrement">
                    <h1>{count}</h1>
                    <button onClick={decrement}>Decrement</button>
                    <button onClick={increment}>Increment</button>
                </div>
            </div>
        );
    
}

export default IncrementDecrement;