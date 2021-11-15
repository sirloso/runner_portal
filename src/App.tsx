import React from 'react'

import runner from "../public/runner.mp4"

const App = (props:any) => {
    return(
        <div>
            <video id= controls>
                <source src={runner} type="video/mp4"/>
            </video>
        </div>
    )
}

export default App