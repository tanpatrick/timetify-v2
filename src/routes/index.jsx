import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import About from './about'
import Home from './home'
import Projects from './projects'
import Settings from './settings'
import Users from './users'

const Routes = () => (
    <Router>
        <div>
            <nav >
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                    <li>
                        <Link to="/settings">Settings</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/users" component={Users} />
                <Route exact path="/settings" component={Settings} />
                <Route path="/about" component={About} />
            </div>
        </div>
    </Router>
)

export default Routes