import React, { useState, useEffect} from 'react';
import './Countdown.css'

const Countdown = (props) =>{

    

    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(()=>{

        const { deadline } = props;
        const intervalId = setInterval(() => {
          const now = new Date();
          // get total seconds between the times
          let delta = Math.abs(deadline - now) / 1000;
          // calculate (and subtract) whole days
          const days = Math.floor(delta / 86400);
          delta -= days * 86400;
          // calculate (and subtract) whole hours
          const hours = Math.floor(delta / 3600) % 24;
          delta -= hours * 3600;
          // calculate (and subtract) whole minutes
          const minutes = Math.floor(delta / 60) % 60;
          delta -= minutes * 60;
          // what's left is seconds
          const seconds = Math.floor(delta % 60); // in theory the modulus is not required
          
          setDays(days);
          setHours(hours);
          setMinutes(minutes);
          setSeconds(seconds);

        }, 1000);

        return () =>{
            clearInterval(intervalId);
        };
    },[days, hours, minutes, seconds, props]);

    return (
        <section className="counter section-padding">
            <div className="container">
                <div className="counter-content-wrapper flex">
                    <h2>Tiempo restante para el evento</h2>
                    <div className="counter-content flex">
                        <div className="counter-content-box">
                            <span>{days}</span>
                            <p>Días</p>
                        </div>
                        <div className="counter-content-box">
                            <span>{hours}</span>
                            <p>Horas</p>
                        </div>
                        <div className="counter-content-box">
                            <span>{minutes}</span>
                            <p>Minutos</p>
                        </div>
                        <div className="counter-content-box">
                            <span>{seconds}</span>
                            <p>Segundos</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
    
}
   

export default Countdown;