import { Component } from 'react'
import { Datatable } from '../components'

class Groups extends Component {

    constructor(props) {
        super(props)

        this.state = {
            columns: props.columns,
            data: props.data
        }
    }

    render() {
        const { columns, data } = this.state

        return (
            <Datatable
                headline="Group"
                columns={columns}
                data={data}
                buttonLabel="New Group"
            />
        )
    }
}

Groups.defaultProps = {
    columns: [{
        'key': 'group',
        'label': 'Group'
    }],
    data: [{
        'group': 'Group A'
    }, {
        'group': 'Group B'
    }, {
        'group': 'Group C'
    }, {
        'group': 'Group D'
    }]
}

export default Groups