import React from 'react'
import {
    render
} from 'react-dom'

import './styles/main.scss'

import Routes from './routes'

render(
    <Routes />,
    document.querySelector('#app')
)