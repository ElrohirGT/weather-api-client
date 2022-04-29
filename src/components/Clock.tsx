import { useEffect, useState } from "react";

type ClockProps = {
    timezone: string
}

export function Clock(props: ClockProps) {
    const [date, setDate] = useState(new Date());
    useEffect(()=>{
        let intervalID = setInterval(()=>{
            setDate(new Date());
        }, 1000);
        return ()=> clearInterval(intervalID);
    }, []);
    return (
        <h2>{date.toLocaleTimeString(undefined, {timeZone: props.timezone})}</h2>
    );
}