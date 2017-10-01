import React, { Component } from 'react'

class Dialog extends Component {

    constructor(props) {
        super(props);
        this.props.dialogId = '#' + this.props.id;
    }

    componentDidMount() {
        if (this.props.onDialogClose) {
            $(this.props.dialogId).modal({
                keyboard: true,
                show: false
            }).on('hidden.bs.modal', this.props.onDialogClose)
        }
    }

    onAction() {
        this.hideDialog()
        this.props.buttonOnClick.call(this)
    }

    hideDialog() {
        $(this.props.dialogId).modal('hide')
    }

    render() {
        return (
            <div id={this.props.id} className="modal fade">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{this.props.title}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {this.props.children}
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-sm btn-primary" onClick={this.onAction.bind(this)}>
                                {this.props.buttonLabel}
                            </button>
                            <button className="btn btn-sm btn-dark" onClick={this.hideDialog.bind(this)}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default Dialog