import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

class NavBar extends Component {
    render() {
        return (
            <nav>
                <NavLink exact activeStyle={{ fontWeight: 'bold' }} to="/">Home</NavLink>
                <NavLink exact activeStyle={{ fontWeight: 'bold' }} to="/coke">Coke</NavLink>
                <NavLink exact activeStyle={{ fontWeight: 'bold' }} to="/cheese">Cheese</NavLink>
                <NavLink exact activeStyle={{ fontWeight: 'bold' }} to="/chips">Chips</NavLink>
            </nav>
        )
    }
}

export default NavBar