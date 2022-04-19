
import React, { Fragment, useState } from 'react'

import './todo.css'

const Input = () =>{
    const [label, setLabel] = useState("")
    const [description, setDescription] = useState("")
    const [cod_priority, setPriority] = useState(0)

    const onSubmitForm = async (e)=>{
        e.preventDefault()

        try{
            const body = {label, description, cod_priority}

            const response = await fetch('http://localhost:5000/todos',{
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })

            console.log(JSON.stringify(body))
            console.log(response)

            window.location = '/'
        }catch(err){
            console.error(err.message)
        }
    }

    return(
        <Fragment>
            <h1 className="text-center mt-5">Lista de Tarefas</h1>
            <h3>Adicione uma nova Tarefa</h3>
            <form className="d-flex mt-5"
                  onSubmit={onSubmitForm}>
                <div>
                    <input type="text" className="form-control"
                       value={label}
                       onChange={e =>{
                        setLabel(e.target.value)
                       }}/>
                </div>
                <div>
                    <input type="text" className="form-control" 
                       value={description} 
                       onChange={ e =>{
                            setDescription(e.target.value)
                            //console.log(description)
                       }}/>
                </div>
                <div>
                    <select name="todoPriority"
                            className="form-control"
                            onChange={ e =>{
                                setPriority(e.target.value)
                                //console.log(cod_priority)
                            }}>
                        <option value="0" defaultValue className="no_priority">Sem Prioridade</option>
                        <option value="1"  className="low_priority">Baixa</option>
                        <option value="2" className="average_priority">Média</option>
                        <option value="3" className="high_priority"> Alta</option>
                    </select>
                </div>
                <button className="btn btn-success">Adicione</button>
            </form>
        </Fragment>
    )
}

export default Input;