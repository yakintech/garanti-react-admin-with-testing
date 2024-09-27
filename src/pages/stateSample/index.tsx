import React, { useState } from 'react'

const StateSample: React.FC = () => {

    const [counter, setcounter] = useState(0)


    return <>
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={() => setcounter(counter + 1)}>Increment</button>
            <button onClick={() => setcounter(counter - 1)}>Decrement</button>
        </div>
    </>
}

export default StateSample