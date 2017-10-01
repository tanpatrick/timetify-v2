import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'

import Button from './button'

class Datatable extends Component {

    constructor(props) {
        super(props);

        this.state = {
            columns: props.columns,
            data: props.endpoint ? [] : props.data
        }
    }

    componentDidMount() {
        if (this.props.endpoint) {
            fetch(this.props.endpoint)
                .then(response => response.json())
                .then(json => json.results)
                .then(data => this.setState({
                    data: this.props.callback ? this.props.callback.call(this, data) : data
                }))
        }
    }

    getTableColumnsData() {
        return this.props.columns.map((column) => {
            return (
                <th>{column.label}</th>
            )
        });
    }

    getTableRowsData() {
        return this.state.data.map((row, index) => {
            return (
                <tr key={index}>
                    {this.props.columns.map((column) => {
                        return (<td>{row[column.key]}</td>)
                    })}
                </tr>
            )
        });
    }

    render() {
        var tableColumns = this.getTableColumnsData();
        var tableRows = this.getTableRowsData();

        return ([
            <div className="row">
                <div className="col-auto mr-auto">
                    <h2>
                        <strong>{this.props.headline}</strong>
                    </h2>
                </div>
                <div className="col-auto">
                    <Button label={this.props.buttonLabel}
                        style="success"
                        onClick={this.props.buttonOnClick} />
                </div>
            </div>,
            <div className={this.props.className}>
                <table className="table table-bordered table-responsive table-hover">
                    <thead className="thead-default">
                        <tr>
                            {tableColumns}
                        </tr>
                    </thead>
                    <tbody>
                        {tableRows}
                    </tbody>
                </table>
            </div>]);
    }
}

// Sample param data
Datatable.defaultProps = {
    headline: 'Data Table',
    data: [{
        'id': 'Default ID',
        'code': 'Default code',
        'name': 'Default name',
        'description': 'Default description'
    }],
    columns: [{
        'key': 'code',
        'label': 'Code'
    }, {
        'key': 'name',
        'label': 'Name'
    }, {
        'key': 'description',
        'label': 'Description'
    }]
};

export default Datatable