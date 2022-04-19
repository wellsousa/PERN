
import React, {Fragment, useEffect, useState} from 'react'

import EditTodo from './Edit'
import './todo.css'

const List = () =>{

    const [list, setList] = useState([])

    useEffect( ()=>{
       getTodoList()
    },[])

    const getTodoList = async () =>{
        
        try{
            const response = await fetch('http://localhost:5000/todos', {
                method: 'GET',
                headers: {"Content-Type": "application/json"}
            })

            const result = await response.json()

            setList(result)
        }catch(err){
            console.error(err.message)
        }

    }

    const Row = ({data, id})=>{
        const {label, description, cod_priority} = data
        const _id = id
        return(
            
                <tr key={_id}>
                    <td>{data.id}</td>
                    <td className={ cod_priority == 0?"no_priority":(cod_priority ==1?"low_priority":(cod_priority == 2?"average_priority":"high_priority")) }>{label}</td>
                    <td>{description}</td>
                    <td>
                        <EditTodo/>
                    </td>
                    <td>
                        <button className="btn btn-danger"
                                onClick={async ()=>{
                                    try{
                                        const deletedTodo = await fetch(`http://localhost:5000/todo/${data.id}`, {
                                            method: 'DELETE',
                                            headers: {"Content-Type": "application/json"}
                                        })
                                        
                                        /*
                                            atualiza o state sem o todo com id removido. Isso economiza uma requisao
                                            apenas para ter a lista atualizada
                                        */
                                        setList(list.filter(todo => todo.id !== data.id))
                                    }catch(err){
                                        console.error(err.message)
                                    } 
                                }}>
                            Excluir
                        </button>
                    </td>
                </tr>
        )
    }



    console.log(list)
    return(
        <Fragment>
            <h3>Lista de Tarefas</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Etiqueta</th>
                        <th scope="col">Descrição</th>
                        <th scope="col">Editar</th>
                        <th scope="col">Excluir</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((data, id) => {
                        //console.log(todo)
                       return <Row key={id} data={data}/>
                    })}
                </tbody>
            </table>
        </Fragment>
    )
}

export default List