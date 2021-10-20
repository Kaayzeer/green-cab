import React,{useState} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import RadioGroup from '../RadioGroupSearch'

/* function DatePick() {
   

} */

function Index() {

    const [startDate, setStartDate] = useState(new Date());
    const [isOpen, setIsOpen] = useState(false);


    const handleToggle = (e) => {
      setIsOpen(!isOpen)
      setStartDate(e);
    };
    const handleClick = (e) => {
      e.preventDefault();
      setIsOpen(!isOpen);
    };

    
    return (
      <>
        <DatePicker selected={startDate} onChange={handleToggle} inline />
      </>
    );
}

export default Index
