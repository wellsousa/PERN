
import React, {Fragment, useState} from 'react'

import Modal from './../Modal'

const Edit = ({data}) =>{
    const[modal, setModal] = useState(false)

    const todoUpdate = async () =>{
         try{
            const response = await fetch(`http://localhost:5000/${data.id}`,{
                method: 'PUT',
                headers: {"Content-Type":"application/json"}
            })
         }catch(err){
             console.error(err.message)
         }
    }

    return(
        <Fragment>
           <button className="btn btn-primary" onClick={()=> setModal(true)}>Editar</button>
           {modal == true? <Modal data={data} 
                                  hide={()=>setModal(false)}
                                  url="http://localhost:5000/todo"/>:''}
                                  
        </Fragment>
    )
 
}

export default Edit;