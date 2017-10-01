import { Component } from 'react'
import { Datatable } from '../components'


class Projects extends Component {

    constructor(props) {
        super(props)

        this.state = {
            columns: props.columns,
            data: props.data
        }
    }

    componentDidMount() {
    }

    render() {
        const { columns, data } = this.state

        return (
            <Datatable
                headline="Projects"
                columns={columns}
                data={data}
                buttonLabel="New Project"
            />
        )
    }
}

Projects.defaultProps = {
    columns: [{
        'key': 'code',
        'label': 'Code'
    }, {
        'key': 'name',
        'label': 'Name'
    }, {
        'key': 'description',
        'label': 'Description'
    }],
    data: [{
        'id': '0001',
        'code': '0001',
        'name': 'Fantastic Deals!',
        'description': 'Bang for your buck deals!',
        'company': 'Telcom'
    }, {
        'id': '0002',
        'code': '0002',
        'name': 'Fantastic Broadband',
        'description': 'Fastest broadband you can get for only $50',
        'company': 'Telcom'
    }]
}

export default Projects