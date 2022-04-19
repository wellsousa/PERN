import React, {Fragment, useState} from 'react'

const Modal =({data, hide, url})=>{

    const [description, setDescription] = useState(data.description)
    const [cod_priority, setCodPriorioty] = useState(data.cod_priority)


        let modalStyle = {
            display: 'block',
            backgroundColor: 'rgba(0,0,0,0.8)'
        }

        return (
            <Fragment>
            
                <div className="modal show fade" tabIndex="-1" style={modalStyle}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Editar Tarefa - {data.label} </h5>
                                <button type="button" className="btn-close" onClick={hide}></button>
                            </div>
                            <form>
                                <div className="modal-body">
                                    <div>
                                        <label>Descrição</label>
                                        <input className="form-control" type="text" value={description}
                                              onChange={(e)=>{
                                                setDescription(e.target.value)
                                              }}></input>
                                    </div>
                                    <div>
                                        <label>Prioridade</label>
                                        <input className="form-control" type="text" value={cod_priority}
                                            onChange={(e)=>{
                                                setCodPriorioty(e.target.value)
                                            }}></input>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={hide}>Fechar</button>
                                    <button type="button" className="btn btn-primary" 
                                            onClick={ async ()=>{
                                                try{
                                                    console.log(`${url}/${data.id}`)
                                                    
                                                    const body = {description, cod_priority}
                                                    const response = await fetch(`http://localhost:5000/todo/${data.id}`,{
                                                        method: 'PUT',
                                                        headers: {"Content-Type":"application/json"},
                                                        body: JSON.stringify(body)
                                                    })

                                                    hide()

                                                    window.location = "/"
                                                 }catch(err){
                                                     console.error(err.message)
                                                 }
                                            }}>Salvar Alterações</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    
}

export default Modal;