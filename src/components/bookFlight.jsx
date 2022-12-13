import react, { useEffect, useState } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import axios from 'axios';

export default function BookFlight(){
    const postURL='http://localhost:4000';
    const [err,setErr]=useState(false);
    const [data,setData]=useState({
        id:"",
        passenger:"",
        ticketNum:'',
        flightId:""
    })
    
    const handleSubmit=async (e)=>{
        e.preventDefault();
        let res=await axios.post(`${postURL}/users`,data)
        if(res){
            alert("Data Saved Successfully!")
        }
        else{
            alert("Something went Wrong")
        }
        setData({
            id:'',
            passenger:'',
            ticketNum:'',
            flightId:''
        })
    }

    const handleChange=(e)=>{
        const{name,value}=e.target;
        setData({...data,[name]:value})
    }
    useEffect(()=>{
        
    },[])

    return(
        <>
            <div className='form' style={{padding:'2rem'}}>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for='passenger'>Passenger Name:</Label>
                        <Input type='text' 
                        name='passenger' value={data.passenger} onChange={handleChange}  ></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for='ticketNum'>Number of Ticket:</Label>
                        <Input type='number'
                        name='ticketNum' value={data.ticketNum} onChange={handleChange}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for='flightId'>Flight Id:</Label>
                        <Input type='text'
                        name='flightId' value={data.flightId} onChange={handleChange}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Button type='submit'>Book</Button>
                    </FormGroup>
                </Form>
            </div>
        </>
    )
}