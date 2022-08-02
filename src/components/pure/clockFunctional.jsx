import React, { useEffect, useState } from "react";

const ClockFx = (props) => {
  // { fecha: new Date(), edad: 0, nombre: 'Martin', apellidos: 'San Jose' }

  const [date, setDate] = useState(new Date());

  const [age, setAge] = useState(0);

  useEffect(() => {
    // componentDidMount
    const timerID = setInterval(() => {
      setAge((age) => age + 1);
      setDate(new Date());
    }, 1000);
    return () => {
      // componentWillUnmount
      // cleanup
      clearInterval(timerID);
    };
  }, []);

  return (
    <div>
      <h2> Hora Actual: {date.toLocaleTimeString()}</h2>
      <h3>
        {props.nombre} {props.apellidos}
      </h3>
      <h1>Edad: {age}</h1>
    </div>
  );
};

export default ClockFx;
