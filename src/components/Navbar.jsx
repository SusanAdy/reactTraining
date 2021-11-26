import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import css from './Navbar.module.css'

class Navbar extends Component {
    render() {
        return (
            <div>
              <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                  <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarNav">
                      <ul class="navbar-nav">
                        <NavLink className={(navData)=>navData.isActive? css.active:css.navlink } to="/">Home</NavLink>
                        <NavLink className={(navData)=>navData.isActive? css.active:css.navlink } to="/address">Address</NavLink>
                      </ul>
                    </div>
                  </div>
              </nav>
            </div>
        )
    }
}

export default Navbar
