import React, { useState, useEffect } from 'react';

const Timer = ({time}) => {
    const [timerDays, setTimerDays] = useState(0);
    const [timerHours, setTimerHours] = useState(0);
    const [timerMinutes, setTimerMinutes] = useState(0);
    const [timerSeconds, setTimerSeconds] = useState(0);

    // let interval;

    const [timer, setTimer] = useState(true);
    console.log(time);
    const startTimer = () => {
        const countDownDate = new Date(time).getTime();

        let interval = setInterval(() => {
            const now = new Date().getTime();

            const distance = countDownDate - now;

            const days = Math.floor(distance / (24 * 60 * 60 * 1000));
            const hours = Math.floor(
                (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
            const seconds = Math.floor((distance % (60 * 1000)) / 1000);

            if (distance < 0) {
                console.log(distance);
                // Stop Timer
                clearInterval(interval);
                setTimer(false);
                // console.log(timer);
            } else {
                // Update Timer
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
                setTimer(true);
            }
        });
    };

    useEffect(() => {
        startTimer();
    });

    return (
        <>
            <div className='timer' >
                <div className="clock">
                    <span className='fw-bold'>Time Left</span> <br />
                    {timer ? (
                        <h6 >{timerDays}d : {timerHours}h : {timerMinutes}m : {timerSeconds}s</h6>
                    ) : <span style={{color:'red'}} >Item Sold</span>}
                </div>
            </div>
        </>
    )

}

export default Timer;