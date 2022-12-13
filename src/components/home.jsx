import React, { useState } from 'react'
import { Button } from 'reactstrap';
import BookFlight from './bookFlight';
import './styles.css'

function Home(){
    const [otherComp,setOtherComp]=useState(false);

    const handleRoute=(e)=>{
        setOtherComp(!otherComp);
    }
    return(
        <>
       {!otherComp &&
        <div className='background'>
        <h1 className='heading' >Welcome to Flight Booking System !</h1><br/>
        <h3>Quick Guidelines :</h3>
        <ul>
            <h6>1. While booking, enter proper flight id (having 4 digit number)</h6>
            <h6>2. Number of booking tickets can not be more than 40</h6>
        </ul>
        <Button onClick={handleRoute}>Got it!</Button>
       
        </div>}
        {
            otherComp&&
            <>
                <BookFlight/>
            </>
        }
        
        </>
    )
}
export default Home;