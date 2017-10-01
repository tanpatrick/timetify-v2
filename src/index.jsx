import React from 'react'
import {
    render
} from 'react-dom'

import './styles/main.scss'

import Routes from './routes'

window.React = React

render(
    <Routes />,
    document.querySelector('#app')
)