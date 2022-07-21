import React, { useEffect, useState } from "react";
function Clock1() {

    var [date, setDate] = useState(new Date());

    useEffect(() => {
        var timer = setInterval(() => setDate(new Date()), 1000 )
        
        return function cleanup() {
            clearInterval(timer)
        }
    });

    return (
        <div>
            <h5>Local Time</h5>
            <h4>It is {date.toLocaleTimeString()}</h4>
        </div>
    );

}        



export default Clock1;