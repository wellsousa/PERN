import React, {Component, Fragment} from 'react'

class Modal extends Component{

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
                                <h5 className="modal-title">Modal title</h5>
                                <button type="button" className="btn-close" onClick={this.props.hide}></button>
                            </div>
                            <div className="modal-body">
                                <p>Modal body text goes here.</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={this.props.hide}>Fechar</button>
                                <button type="button" className="btn btn-primary">Salvar Alterações</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Modal;