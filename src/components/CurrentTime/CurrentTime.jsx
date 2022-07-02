import React, { useState } from 'react';
import './CurrentTime.css';

const CurrentTime = () => {
    let date = new Date();
    let month = date.getMonth() + 1; //months from 1-12 (0 = january, 1 = february)
    let day = date.getDate();
    let year = date.getFullYear();
    let newDate = month + "/" + day + "/" + year;

    const currentTime = new Date().toLocaleTimeString();
    const [time, setTime] = useState(currentTime);
   
    const SetTime = () => {
        const currentTime = new Date().toLocaleTimeString();
        setTime(currentTime);
    }

    setInterval(SetTime, 1000);
    
    return (
        <div className="text">
            {newDate} {time}
        </div>
    )
}

export default CurrentTime;