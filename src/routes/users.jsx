import { Component } from 'react'
import fetch from 'isomorphic-fetch'

import { Datatable } from '../components'

class Users extends Component {

    constructor(props) {
        super(props)

        this.state = {
            columns: props.columns
        }
    }

    mapUserData(response) {
        const data = []

        response.map((user) => data.push({
            email: user.email,
            name: user.name.last + ', ' + user.name.first
        }))

        return data

    }

    render() {
        const { columns } = this.state

        return (
            <Datatable
                headline="Users"
                columns={columns}
                endpoint="//api.randomuser.me/?nat=US&results=12"
                callback={this.mapUserData}
                buttonLabel="New User"
            />
        )
    }
}

Users.defaultProps = {
    columns: [{
        'key': 'email',
        'label': 'Email'
    }, {
        'key': 'name',
        'label': 'Name'
    }]
}


export default Users