import React from "react";
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import './Navv.css'



const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className="item">
                <NavLink to='/profile'>Profile</NavLink>
            </div>
            <div className="item">
                <NavLink to='/dialogs' >Messages</NavLink>
            </div>
            <div className="item">
                <NavLink to='/news' >News</NavLink>
            </div>
            <div className="item">
                <NavLink to='/music' >Music</NavLink>
            </div>
            <div className="item">
                <NavLink to='/settings' >Settings</NavLink>
            </div>
            <div className={classes.actual}>
                Actual friends
            </div>
        </nav>
    )
}
export default Navbar;