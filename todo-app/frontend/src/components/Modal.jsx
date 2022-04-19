import React, {Component, Fragment, useState} from 'react'

class Modal extends Component{
    state = {
        description: this.props.data.description,
        cod_priority: this.props.data.cod_priority
    }
    render(){

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
                                <h5 className="modal-title">Editar Tarefa - {this.props.data.label} </h5>
                                <button type="button" className="btn-close" onClick={this.props.hide}></button>
                            </div>
                            <form>
                                <div className="modal-body">
                                    <div>
                                        <label>Descrição</label>
                                        <input className="form-control" type="text" value="{this.state.description}"
                                              onChange={(e)=>{
                                                this.state.description = e.target.value
                                              }}></input>
                                    </div>
                                    <div>
                                        <label>Prioridade</label>
                                        <input className="form-control" type="text" value={this.state.cod_priority}></input>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={this.props.hide}>Fechar</button>
                                    <button type="button" className="btn btn-primary" 
                                            onClick={ async ()=>{
                                                try{
                                                    console.log(`${this.props.url}/${this.props.data.id}`)
                                                    
                                                    const response = await fetch(`http://localhost:5000/todo/${this.props.data.id}`,{
                                                        method: 'PUT',
                                                        headers: {"Content-Type":"application/json"},
                                                        body: JSON.stringify({"description":"hello world", "cod_priority":3})
                                                    })
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
}

export default Modal;