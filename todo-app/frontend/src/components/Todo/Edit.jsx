
import React, {Fragment, useState} from 'react'

import Modal from './../Modal'

const Edit = () =>{
    const[modal, setModal] = useState(false)

    const showModal = () =>{
         setModal(true)   
    }

    return(
        <Fragment>
           <button className="btn btn-primary" onClick={()=> setModal(true)}>Editar</button>
           {modal == true? <Modal hide={()=>setModal(false)}/>:''}
        </Fragment>
    )
 
}

export default Edit;