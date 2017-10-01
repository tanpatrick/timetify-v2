import { Component } from 'react'

import {
    Datatable,
    Dialog,
    Textarea,
    Textbox
} from '../components'


class Projects extends Component {

    constructor(props) {
        super(props)

        this.state = {
            columns: props.columns,
            data: props.data
        }

        this.onButtonClick = this.onButtonClick.bind(this)
        this.onEditProject = this.onEditProject.bind(this)
    }

    componentDidMount() {
    }

    onButtonClick() {
        console.log(`
            Project 
            =======================
            Code       : ${this.code.value}
            Name       : ${this.name.value}
            Description: ${this.description.value}
        `)

        const project = {
            id: this.state.data.length + 1,
            code: this.code.value,
            name: this.name.value,
            description: this.description.value
        }

        this.setState({ data: this.state.data.push(project) })

    }

    onEditProject() {
        console.log('onEditProject')
    }

    render() {
        const { columns, data } = this.state

        return ([
            <Datatable
                headline="Projects"
                columns={columns}
                data={data}
                buttonLabel="New Project"
                buttonOnClick={() => {
                    $('#project-dialog').modal('show')
                }}
            />,
            <Dialog
                key="2"
                id="project-dialog"
                title="New Project"
                buttonLabel="Save"
                buttonOnClick={this.onButtonClick}>
                <Textbox id="project-code"
                    label="Code"
                    inputRef={el => this.code = el}
                />
                <Textbox id="project-name"
                    label="Name"
                    inputRef={el => this.name = el}
                />
                <Textarea id="project-description"
                    label="Description"
                    inputRef={el => this.description = el}
                />
            </Dialog>,

        ])
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
        'description': 'Bang for your buck deals!'
    }, {
        'id': '0002',
        'code': '0002',
        'name': 'Fantastic Broadband',
        'description': 'Fastest broadband you can get for only $50'
    }]
}

export default Projects