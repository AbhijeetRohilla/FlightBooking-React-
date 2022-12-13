import React,{useEffect, useState} from "react";
import axios from 'axios';
import { Button, Table } from "reactstrap";

function ViewDetail(){
    
    const URL='http://localhost:4000';
    const [data,setData]=useState([{
        id:'',passenger:'',ticketNum:'',flightID:''
    }]);
    useEffect(()=>{
        getData();
    },[])

    const getData=async ()=>{
    await axios.get(`${URL}/users`).then(
            res=>{
                setData(res.data);
             } )
    }
    const handleDelete=async (id)=>{
        await axios.delete(`${URL}/users/`+id).then((res)=>{
            alert('Deleted Successfully id No. '+id)
        })
        getData();
    }

    return(
        <>
        <div className="viewdetail">
            <Table bordered>
                <thead>
                    <tr>
                        <th>Passenger Name</th>
                        <th>Booking Id</th>
                        <th>Number of Ticket</th>
                        <th>Amount</th>
                        <th>Delete</th>
                    </tr>
                </thead>
               {
                data.map((items)=>{
                    return(
                        <tbody>
                    <tr>
                    <td>{items.passenger}</td>
                    <td>{items.id}</td>
                    <td>{items.ticketNum}</td>
                    <td>Amount</td>

                    <td><Button color='danger' onClick={(e)=>{handleDelete(items.id)}}>Delete</Button></td>
                
                    </tr>
                </tbody>
                    )
                })
               }  
            </Table>
        </div>

        </>
    )
}
export default ViewDetail;