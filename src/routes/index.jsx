import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    NavLink
} from 'react-router-dom'

import About from './about'
import Home from './home'
import Projects from './projects'
import Settings from './settings'
import Users from './users'

const Routes = () => (
    <Router>
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4 fixed-top bg-faded">
                <a className="navbar-brand" href="/">
                    <strong>
                        timetify
                    </strong>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <span className="navbar-text mr-auto">
                        lorem ipsum dolor sit amet.
                    </span>
                    <ul className="navbar-nav mt-2 mt-md-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" exact to="/">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" exact to="/projects">
                                Projects
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" exact to="/users">
                                Users
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" exact to="/settings">
                                Settings
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" exact to="/about">
                                About
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="container-fluid">
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