import React,{useState} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Index() {

    const [startDate, setStartDate] = useState(new Date())

    const dateStyle = {
        display: 'none'
    }

    return (
        <div>
            <DatePicker style={dateStyle} selected={startDate} onChange={date => setStartDate(date)}/>
        </div>
    )
}

export default Index
