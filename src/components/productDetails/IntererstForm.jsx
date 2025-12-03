import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import ReceiveForm from './ReceiveForm';
import Loading from '../loading/Loading';
const IntererstForm = () => {
    const {user}=use(AuthContext)
    const [insertData,setInsertData]=useState([])
    const [loading,setLoading]=useState(true)
useEffect(()=>{
    fetch(`http://localhost:3000/interst?email=${user.email}`)
    .then(res=>res.json()).
    then(data =>{
        setInsertData(data)
        setLoading(false)
    })
    .catch(error=>console.log(error))

},[user])
console.log(insertData);

if(loading){
    return <p>loading.....</p>
}

    if(insertData.length == 0){
        return <p className='font-bold text-2xl text-center mt-8 mb-8'>No interest here </p>
    }

    return (
        <div>
           {
            insertData.map(Data => <ReceiveForm key={Data._id} Data={Data}></ReceiveForm>)
           }
        </div>
    );
};

export default IntererstForm;